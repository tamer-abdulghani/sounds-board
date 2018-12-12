/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    $.ajax({
        url: "http://localhost:8080/track/all"
    }).then(function (result) {
        dataset = []
        dataset["children"] = result;
        initialize(dataset);
    });
    /*
     dataset = {
     "children": [
     {"name": "Olives", "played_count": 4319},
     {"name": "Tea", "played_count": 4159},
     {"name": "Mashed Potatoes", "played_count": 2583},
     {"name": "Boiled Potatoes", "played_count": 2074},
     {"name": "Milk", "played_count": 1894},
     {"name": "Chicken Salad", "played_count": 1809},
     {"name": "Vanilla Ice Cream", "played_count": 1713},
     {"name": "Cocoa", "played_count": 1636},
     {"name": "Lettuce Salad", "played_count": 1566},
     {"name": "Lobster Salad", "played_count": 1511},
     {"name": "Chocolate", "played_count": 1489},
     {"name": "Apple Pie", "played_count": 1487},
     {"name": "Orange Juice", "played_count": 1423},
     {"name": "American Cheese", "played_count": 1372},
     {"name": "Green Peas", "played_count": 1341},
     {"name": "Assorted Cakes", "played_count": 1331},
     {"name": "French Fried Potatoes", "played_count": 1328},
     {"name": "Potato Salad", "played_count": 1306},
     {"name": "Baked Potatoes", "played_count": 1293},
     {"name": "Roquefort", "played_count": 1273},
     {"name": "Stewed Prunes", "played_count": 1268}]
     };
     */




});

function initialize(dataset)
{
    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
            .size([diameter, diameter])
            .padding(1.5);

    var svg = d3.select(".bubbles-container")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
            .sum(function (d) {
                return d.played_count;
            });

    var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function (d) {
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("data-id", function (d) {
                return d.data.id;
            })
            .attr("data-path", function (d) {
                return d.data.path;
            })
            .attr("data-name", function (d) {
                return d.data.name;
            })
            .attr("data-count", function (d) {
                return d.data.played_count;
            })
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

    node.append("title")
            .text(function (d) {
                return d.data.name + ": " + d.data.played_count;
            });

    node.append("circle")
            .attr("r", function (d) {
                return d.r;
            })
            .style("fill", function (d, i) {
                return color(i);
            });

    node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function (d) {
                return d.data.name.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function (d) {
                return d.r / 5;
            })
            .attr("fill", "white");

    node.append("text")
            .attr("dy", "1.3em")
            .style("text-anchor", "middle")
            .text(function (d) {
                return d.data.played_count;
            })
            .attr("font-family", "Gill Sans", "Gill Sans MT")
            .attr("font-size", function (d) {
                return d.r / 5;
            })
            .attr("fill", "white");

    d3.select(self.frameElement)
            .style("height", diameter + "px");

}

$(document).ready(function () {
    $(document).on("click", ".node circle,.node text", function () {
        var data = $(this).closest('.node').data();
        data["contexts"] = [];
        data["categories"] = [];
        $.ajax({
            url: "http://localhost:8080/trackitem/" + data.id,
            cache: false,
            contentType: 'application/json; charset=utf-8',
            async: false,
            processData: false,
            method: 'GET',
            type: 'GET', // For jQuery < 1.9
            success: function (result) {
                console.log(result);
                $('#sidebar ul').append(result);
                $('#sidebar ul li:last-child audio')[0].play();
            }
        });
    });

    $(document).on("keypress", ".search-text, #search-btn", function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            var keyword = $(".search-text").val();
            $.ajax({
                url: "http://localhost:8080/track/" + keyword
            }).then(function (result) {
                $(".bubbles-container").html("");
                dataset = []
                dataset["children"] = result;
                initialize(dataset);
            });
            return false;
        }
    });
});