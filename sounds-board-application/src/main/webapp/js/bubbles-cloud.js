/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * Below code is inspired and taken from this page:
 * https://bl.ocks.org/alokkshukla/3d6be4be0ef9f6977ec6718b2916d168
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
});

function initialize(dataset)
{
    var diameter = 500;
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
                return d.r / 4;
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
                console.log(result)
                var elements = $(result);
                var audio = $('li', elements);
                $('#sidebar ul').append(audio);
                $('#sidebar ul li:last-child audio')[0].play();
                $('#sidebar ul li:last-child audio')[0].addEventListener("play", function () {
                    playWaveElement(data.id);
                });
                $('#sidebar ul li:last-child audio')[0].addEventListener("pause", function () {
                    pauseWaveElement(data.id);
                });

                $(".wavers-container")
                        .append("<div id='waver-" + data.id + "'></div>")
                createWaverElemet(data.id);
                $('.fa-play').removeClass('fa-play').addClass('fa-pause');
            }
        });
    });

    $(document).on("keypress", ".search-text", function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            var keyword = $(".search-text").val();
            if (keyword === "")
            {
                keyword = "all";
            }
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

    $(document).on("click", "#search-btn", function (e) {

        var keyword = $(".search-text").val();
        if (keyword === "")
        {
            keyword = "all";
        }
        $.ajax({
            url: "http://localhost:8080/track/" + keyword
        }).then(function (result) {
            $(".bubbles-container").html("");
            dataset = []
            dataset["children"] = result;
            initialize(dataset);
        });
        return false;

    });

    $(document).on("click", ".fa-eye-slash", function () {
        $('.wavers-container').hide(500);
        $(".fa-eye-slash").removeClass("fa-eye-slash").addClass("fa-eye");
    });

    $(document).on("click", ".fa-eye", function () {
        $('.wavers-container').show(500);
        $(".fa-eye").removeClass("fa-eye").addClass("fa-eye-slash");
    });

    $(document).on("click", ".fa-pause", function () {
        $('audio').each(function () {
            this.pause();
        });
        pauseAll();
        $(this).removeClass('fa-pause').addClass('fa-play');
    });

    $(document).on("click", ".fa-play", function () {
        $('audio').each(function () {
            this.play();
        });
        playAll();
        $(this).removeClass('fa-play').addClass('fa-pause');
    });

    $(document).on("click", ".fa-sort-amount-down", function () {
        $('audio').each(function () {
            audioVolumeOut(this);
        });
    });

    $(document).on("click", ".fa-sort-amount-up", function () {
        $('audio').each(function () {
            audioVolumeIn(this);
        });
    });

    $(document).on("play", "audio", function () {
        alert($(this).attr('id'));

    });

    $(document).on("input", ".slider", function () {
        $('audio').each(function () {
            this.volume = parseFloat($('.slider').val()) / 100;
        });

    });
});