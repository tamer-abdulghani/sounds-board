-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2018 at 09:06 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sounds-track-final-2`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'music'),
(2, 'Vehicles'),
(3, 'comedy'),
(4, 'human'),
(5, 'animals'),
(6, 'nature');

-- --------------------------------------------------------

--
-- Table structure for table `contexts`
--

CREATE TABLE `contexts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contexts`
--

INSERT INTO `contexts` (`id`, `name`) VALUES
(1, 'celeberation '),
(2, 'newyear'),
(3, 'accident'),
(4, 'food'),
(5, 'success'),
(6, 'school'),
(7, 'horror'),
(8, 'restaurant'),
(9, 'office'),
(10, 'livingroom'),
(11, 'farm'),
(12, 'zoo');

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `played_count` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id`, `name`, `path`, `played_count`) VALUES
(1, 'horse', './sounds/horse.mp3', 5),
(2, 'bird', './sounds/bird.mp3', 13),
(3, 'dog-barking', './sounds/dog-barking.mp3', 34),
(4, 'radio', './sounds/radio.mp3', 0),
(5, 'street-noise.mp3', './sounds/street-noise.mp3', 36),
(6, 'thunder-rain', './sounds/thunder-rain.mp3', 34),
(7, 'street-train', './sounds/street-train.mp3', 31),
(8, 'train', './sounds/train.mp3', 64),
(9, 'water-city', './sounds/water-city.mp3', 25),
(10, 'sheep', './sounds/sheep.mp3', 31),
(11, 'fireworks-celebration', './sounds/fireworks-celebration.mp3', 40),
(12, 'fire-track', './sounds/fire-track.mp3', 37),
(13, 'horror', './sounds/horror.mp3', 41),
(14, 'drink-water', './sounds/drink-water.mp3', 43),
(15, 'guitar', './sounds/guitar.mp3', 37),
(16, 'SaxRiff', './sounds/SaxRiff.mp3', 51),
(17, 'rain-thunder', './sounds/rain-thunder.mp3', 26),
(18, 'jazz', './sounds/jazz.mp3', 31),
(19, 'storm', './sounds/storm.mp3', 27),
(20, 'radio-old', './sounds/radio-old.mp3', 29),
(21, 'monkey', './sounds/monkey.mp3', 15),
(22, 'mommy-is-here', './sounds/mommy-is-here.mp3', 37),
(23, 'mobile-message', './sounds/mobile-message.mp3', 20),
(24, 'lion-loud', './sounds/lion-loud.mp3', 26),
(25, 'children-playing', './sounds/children-playing.mp3', 29),
(26, 'cat', './sounds/cat.mp3', 28),
(27, 'baby-crying', './sounds/baby-crying.mp3', 37),
(28, 'talking-people', './sounds/talking-people.mp3', 56);

-- --------------------------------------------------------

--
-- Table structure for table `track_categories`
--

CREATE TABLE `track_categories` (
  `track_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_categories`
--

INSERT INTO `track_categories` (`track_id`, `category_id`) VALUES
(1, 5),
(2, 5),
(3, 5),
(4, 6),
(5, 6),
(6, 6),
(8, 2),
(9, 6),
(10, 5),
(11, 4),
(12, 2),
(13, 1),
(14, 3),
(15, 1),
(16, 1),
(17, 6),
(18, 1),
(19, 6),
(20, 6),
(21, 5),
(22, 4),
(23, 6),
(24, 5),
(25, 4),
(26, 5),
(27, 4),
(28, 4);

-- --------------------------------------------------------

--
-- Table structure for table `track_contexts`
--

CREATE TABLE `track_contexts` (
  `track_id` int(11) NOT NULL,
  `context_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_contexts`
--

INSERT INTO `track_contexts` (`track_id`, `context_id`) VALUES
(1, 11),
(2, 10),
(2, 10),
(3, 10),
(4, 10),
(5, 8),
(6, 8),
(6, 10),
(7, 8),
(8, 11),
(9, 8),
(10, 11),
(11, 2),
(12, 3),
(13, 7),
(14, 9),
(15, 8),
(16, 8),
(18, 8),
(19, 2),
(20, 10),
(21, 12),
(22, 10),
(23, 9),
(24, 12),
(25, 6),
(26, 10),
(27, 10),
(28, 8),
(28, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contexts`
--
ALTER TABLE `contexts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track_categories`
--
ALTER TABLE `track_categories`
  ADD KEY `track_id` (`track_id`,`category_id`),
  ADD KEY `tc2_cid` (`category_id`);

--
-- Indexes for table `track_contexts`
--
ALTER TABLE `track_contexts`
  ADD KEY `track_id` (`track_id`,`context_id`),
  ADD KEY `tco2_cid` (`context_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contexts`
--
ALTER TABLE `contexts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `track_categories`
--
ALTER TABLE `track_categories`
  ADD CONSTRAINT `tc1_tid` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`),
  ADD CONSTRAINT `tc2_cid` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `track_contexts`
--
ALTER TABLE `track_contexts`
  ADD CONSTRAINT `tco1_tid` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`),
  ADD CONSTRAINT `tco2_cid` FOREIGN KEY (`context_id`) REFERENCES `contexts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
