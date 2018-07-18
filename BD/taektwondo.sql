-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-07-2018 a las 17:59:22
-- Versión del servidor: 5.7.14
-- Versión de PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taektwondo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `ID_ADMINISTRADOR` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `CONTRASENA` varchar(10) NOT NULL,
  `CORREO` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`ID_ADMINISTRADOR`, `NOMBRE`, `CONTRASENA`, `CORREO`) VALUES
(1, 'Jesus Juarez', 'gatoman1', 'gatoman195@gmail.com'),
(2, 'Jesus Daniel', 'jdanman', 'jp.perez.gracia@gmail.com'),
(3, 'Ana Karem', 'karem', 'karem@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `ID_ALUMNO` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDOS` varchar(200) NOT NULL,
  `CINTA` varchar(20) NOT NULL,
  `EDAD` int(3) NOT NULL,
  `ALTURA` float NOT NULL,
  `SEXO` varchar(1) NOT NULL,
  `ID_MAESTRO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`ID_ALUMNO`, `NOMBRE`, `APELLIDOS`, `CINTA`, `EDAD`, `ALTURA`, `SEXO`, `ID_MAESTRO`) VALUES
(2, 'Alexandra \r\n', '-', 'Blanca', 10, 1.22, 'F', 19),
(3, 'Ashley\r\n', '-', 'Blanca', 4, 0.8, 'F', 20),
(4, 'Leonardo\r\n', '-', 'Blanca', 4, 0.8, 'M', 20),
(5, 'Valeria\r\n', '-', 'Blanca', 4, 0.85, 'F', 20),
(6, 'Densel\r\n', '-', 'Blanca', 6, 0.8, 'M', 20),
(7, 'Yosgar\r\n', '-', 'Rojo', 12, 1.52, 'M', 20),
(8, 'Valentina\r\n', '-', 'Rojo', 8, 1.25, 'F', 21),
(9, 'Leslie\r\n', '-', 'Verde', 9, 1.45, 'F', 20),
(10, 'Andrea\r\n', '-', 'Amarilla', 8, 1.3, 'F', 21),
(11, 'Karla\r\n', '-', 'Amarilla', 10, 1.45, 'F', 20),
(12, 'Maximiliano\r\n', '-', 'Amarilla', 9, 1.3, 'M', 20),
(13, 'Ángel\r\n', '-', 'Blanca', 12, 1.45, 'M', 20),
(14, 'Óscar\r\n', '-', 'Blanca', 12, 1.67, 'M', 20),
(15, 'América\r\n', '-', 'Azul', 16, 1.7, 'F', 21),
(16, 'Karim\r\n', '-', 'Azul', 10, 1.35, 'M', 21),
(17, 'Maggie\r\n', '-', 'Amarilla', 15, 1.5, 'F', 21),
(18, 'Aurora\r\n', '-', 'Rojo', 8, 1.2, 'F', 22),
(19, 'Debian\r\n', '-', 'Rojo', 7, 1, 'M', 22),
(20, 'César\r\n', '-', 'Blanca', 10, 1.25, 'M', 21),
(21, 'Alán\r\n', '-', 'Blanca', 7, 0.9, 'M', 19),
(22, 'Valeria Fuentes\r\n', '-', 'Negra', 19, 1.65, 'F', 21),
(23, 'Karla\r\n', '-', 'Negra', 21, 1.65, 'F', 20),
(24, 'Leonardo\r\n', '-', 'Blanca', 12, 1.5, 'M', 20),
(25, 'Ericka\r\n', '-', 'Azul', 18, 1.6, 'F', 22),
(26, 'Tadeo\r\n', '-', 'Blanca', 12, 1.5, 'M', 20),
(27, 'Tadeo\r\n', '-', 'Verde', 11, 1.4, 'M', 20),
(28, 'Andrea', 'Muñoz', 'Amarilla', 10, 1.3, 'F', 20),
(29, 'Marco', 'Polo', 'Amarilla', 12, 1.5, 'M', 19),
(30, 'Karem', '', 'Amarrilla', 14, 1.25, 'F', 19),
(31, 'Polo', '', 'Blanca', 13, 1.2, 'M', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concursantes`
--

CREATE TABLE `concursantes` (
  `ID_CONCURSANTE` int(10) NOT NULL,
  `ID_TORNEO` int(10) NOT NULL,
  `ID_ALUMNO` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `concursantes`
--

INSERT INTO `concursantes` (`ID_CONCURSANTE`, `ID_TORNEO`, `ID_ALUMNO`) VALUES
(2, 3, 5),
(3, 3, 12),
(4, 3, 20),
(6, 4, 21),
(7, 3, 11),
(8, 3, 13),
(9, 3, 28),
(11, 3, 14),
(12, 3, 29),
(13, 3, 30),
(14, 3, 31);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `difeenfrentamientos`
--

CREATE TABLE `difeenfrentamientos` (
  `ID_DIFEENFRENTAMIENTO` int(11) NOT NULL,
  `ID_ALUMNO` int(11) NOT NULL,
  `AL_PUNTUAJE` int(5) NOT NULL,
  `CO_PUNTUAJE` int(11) NOT NULL,
  `ESTATUS` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `difeenfrentamientos`
--

INSERT INTO `difeenfrentamientos` (`ID_DIFEENFRENTAMIENTO`, `ID_ALUMNO`, `AL_PUNTUAJE`, `CO_PUNTUAJE`, `ESTATUS`) VALUES
(1, 11, 3, 3, 'E'),
(2, 28, 3, 3, 'E'),
(3, 20, 3, 3, 'E'),
(4, 13, 3, 3, 'E'),
(5, 12, 3, 3, 'E'),
(6, 11, 7, 3, 'G'),
(7, 20, 3, 3, 'E'),
(8, 28, 3, 3, 'E'),
(9, 13, 3, 3, 'E'),
(10, 12, 3, 3, 'E'),
(11, 11, 7, 3, 'G'),
(12, 20, 3, 3, 'E'),
(13, 28, 3, 3, 'E'),
(14, 13, 3, 3, 'E'),
(15, 12, 3, 3, 'E'),
(16, 11, 3, 3, 'E'),
(17, 20, 3, 3, 'E'),
(18, 28, 3, 3, 'E'),
(19, 13, 3, 3, 'E'),
(20, 12, 3, 3, 'E'),
(21, 11, 3, 3, 'E'),
(22, 20, 3, 3, 'E'),
(23, 28, 3, 3, 'E'),
(24, 13, 3, 3, 'E'),
(25, 12, 3, 3, 'E'),
(26, 11, 3, 3, 'E'),
(27, 20, 3, 3, 'E'),
(28, 28, 3, 3, 'E'),
(29, 13, 3, 3, 'E'),
(30, 12, 3, 3, 'E'),
(31, 11, 3, 3, 'E'),
(32, 20, 3, 3, 'E'),
(33, 13, 3, 3, 'E'),
(34, 20, 3, 3, 'E'),
(35, 28, 3, 3, 'E'),
(36, 13, 3, 3, 'E'),
(37, 12, 3, 3, 'E'),
(38, 28, 3, 3, 'E'),
(39, 13, 3, 3, 'E'),
(40, 12, 3, 3, 'E'),
(41, 11, 3, 3, 'E'),
(42, 20, 3, 3, 'E'),
(43, 13, 3, 3, 'E'),
(44, 20, 3, 3, 'E'),
(45, 28, 3, 3, 'E'),
(46, 13, 3, 3, 'E'),
(47, 12, 3, 3, 'E'),
(48, 28, 3, 3, 'E'),
(49, 13, 3, 3, 'E'),
(50, 12, 3, 3, 'E'),
(51, 11, 3, 3, 'E'),
(52, 20, 3, 3, 'E'),
(53, 28, 3, 3, 'E'),
(54, 13, 3, 3, 'E'),
(55, 12, 3, 3, 'E'),
(56, 11, 3, 3, 'E'),
(57, 20, 3, 3, 'E'),
(58, 28, 3, 3, 'E'),
(59, 13, 3, 3, 'E'),
(60, 12, 3, 3, 'E');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gyms`
--

CREATE TABLE `gyms` (
  `ID_GYM` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `TELEFONO` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gyms`
--

INSERT INTO `gyms` (`ID_GYM`, `NOMBRE`, `DIRECCION`, `TELEFONO`) VALUES
(20, 'Memos', 'Calle Rosa #222', '8143399'),
(22, 'ActiveBody', 'Calle Mercados #600', '6184479528'),
(23, 'Northwest', 'Francisco Villa #415', '8497588'),
(24, 'Strong', 'Japon #256', '8336794');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jueces`
--

CREATE TABLE `jueces` (
  `ID_JUEZ` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDOS` varchar(200) NOT NULL,
  `TELEFONO` int(17) NOT NULL,
  `CONTRASENA` varchar(10) NOT NULL,
  `CORREO` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `jueces`
--

INSERT INTO `jueces` (`ID_JUEZ`, `NOMBRE`, `APELLIDOS`, `TELEFONO`, `CONTRASENA`, `CORREO`) VALUES
(7, 'Marco', 'Reyes Polo', 618456223, 'marco', 'Polo@gmail.com'),
(6, 'Karem', 'Reyes', 618469745, 'ana', 'karem@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `ID_MAESTRO` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDOS` varchar(200) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `TELEFONO` varchar(12) NOT NULL,
  `ID_GYM` int(11) DEFAULT NULL,
  `CONTRASENA` varchar(10) NOT NULL,
  `CORREO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maestros`
--

INSERT INTO `maestros` (`ID_MAESTRO`, `NOMBRE`, `APELLIDOS`, `DIRECCION`, `TELEFONO`, `ID_GYM`, `CONTRASENA`, `CORREO`) VALUES
(19, 'Julio', 'Verne', 'Cobre #45', '6184443322', 22, 'julio', 'Verne@gmail.com'),
(20, 'Jose', 'Ruiz Reyna', 'Estroncio #660', '6184667788', 20, 'jose', 'Ruiz@gmail.com'),
(21, 'Carlos', 'Leon Sanches', 'México #56', '8123456', 23, 'carlos', 'leon@gmail.com'),
(22, 'Ana', 'Sanches', 'Bronce #55', '8447755', 24, 'ana', 'sanches@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuaciones`
--

CREATE TABLE `puntuaciones` (
  `ID_PUNTUACION` int(11) NOT NULL,
  `ID_ALUMNO` int(11) DEFAULT NULL,
  `ID_TORNEO` int(11) DEFAULT NULL,
  `PUNTUACION` int(10) DEFAULT NULL,
  `AMONESTACIONES` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `puntuaciones`
--

INSERT INTO `puntuaciones` (`ID_PUNTUACION`, `ID_ALUMNO`, `ID_TORNEO`, `PUNTUACION`, `AMONESTACIONES`) VALUES
(35, 2, 3, 2, 2),
(36, 9, 3, 9, 9),
(37, 5, 3, 5, 5),
(40, 2, 3, 2, 2),
(41, 9, 3, 9, 9),
(42, 5, 3, 5, 5),
(45, 2, 3, 2, 2),
(46, 9, 3, 9, 9),
(49, 2, 3, 2, 2),
(50, 9, 3, 9, 9),
(51, 5, 3, 5, 5),
(54, 2, 3, 2, 2),
(55, 9, 3, 9, 9),
(56, 5, 3, 5, 5),
(59, 2, 3, 2, 2),
(60, 9, 3, 9, 9),
(61, 5, 3, 5, 5),
(64, 2, 3, 2, 2),
(65, 9, 3, 9, 9),
(66, 5, 3, 5, 5),
(69, 2, 3, 3, 3),
(72, 2, 3, 2, 2),
(73, 9, 3, 9, 9),
(74, 5, 3, 5, 5),
(77, 2, 3, 3, 3),
(80, 2, 3, 3, 3),
(83, 2, 3, 3, 3),
(86, 2, 3, 3, 3),
(89, 2, 3, 3, 3),
(92, 2, 3, 2, 2),
(93, 9, 3, 9, 9),
(94, 5, 3, 5, 5),
(97, 2, 3, 3, 3),
(98, 9, 3, 3, 3),
(101, 2, 3, 3, 3),
(102, 9, 3, 3, 3),
(105, 2, 3, 3, 3),
(106, 9, 3, 3, 3),
(109, 2, 3, 3, 3),
(110, 9, 3, 3, 3),
(113, 2, 3, 3, 3),
(114, 9, 3, 3, 3),
(117, 2, 3, 3, 3),
(118, 9, 3, 3, 3),
(121, 2, 3, 3, 3),
(122, 9, 3, 3, 3),
(125, 2, 3, 3, 3),
(126, 9, 3, 3, 3),
(129, 2, 3, 3, 3),
(132, 2, 3, 3, 3),
(133, 9, 3, 3, 3),
(134, 11, 3, 3, 3),
(135, 12, 3, 3, 3),
(136, 20, 3, 3, 3),
(137, 13, 3, 3, 3),
(138, 28, 3, 3, 3),
(139, 14, 3, 3, 3),
(140, 13, 3, 3, 3),
(141, 28, 3, 3, 3),
(142, 12, 3, 3, 3),
(143, 28, 3, 3, 3),
(144, 11, 3, 3, 3),
(145, 12, 3, 3, 3),
(146, 20, 3, 3, 3),
(147, 13, 3, 3, 3),
(148, 28, 3, 3, 3),
(149, 14, 3, 3, 3),
(150, 13, 3, 3, 3),
(151, 28, 3, 3, 3),
(152, 12, 3, 3, 3),
(153, 28, 3, 3, 3),
(154, 11, 3, 3, 3),
(155, 12, 3, 3, 3),
(156, 20, 3, 3, 3),
(157, 13, 3, 3, 3),
(158, 28, 3, 3, 3),
(159, 14, 3, 3, 3),
(160, 13, 3, 3, 3),
(161, 14, 3, 3, 3),
(162, 12, 3, 3, 3),
(163, 14, 3, 3, 3),
(164, 11, 3, 3, 3),
(165, 12, 3, 3, 3),
(166, 20, 3, 3, 3),
(167, 13, 3, 3, 3),
(168, 28, 3, 3, 3),
(169, 14, 3, 3, 3),
(170, 20, 3, 3, 3),
(171, 28, 3, 3, 3),
(172, 12, 3, 3, 3),
(173, 20, 3, 3, 3),
(174, 11, 3, 3, 3),
(175, 12, 3, 3, 3),
(176, 20, 3, 3, 3),
(177, 13, 3, 3, 3),
(178, 28, 3, 3, 3),
(179, 14, 3, 3, 3),
(180, 20, 3, 3, 3),
(181, 28, 3, 3, 3),
(182, 12, 3, 3, 3),
(183, 20, 3, 3, 3),
(184, 11, 3, 3, 3),
(185, 12, 3, 3, 3),
(186, 20, 3, 3, 3),
(187, 13, 3, 3, 3),
(188, 28, 3, 3, 3),
(189, 14, 3, 3, 3),
(190, 20, 3, 3, 3),
(191, 28, 3, 3, 3),
(192, 12, 3, 3, 3),
(193, 28, 3, 3, 3),
(194, 11, 3, 3, 3),
(195, 12, 3, 3, 3),
(196, 20, 3, 3, 3),
(197, 13, 3, 3, 3),
(198, 28, 3, 3, 3),
(199, 14, 3, 3, 3),
(200, 20, 3, 3, 3),
(201, 28, 3, 3, 3),
(202, 12, 3, 3, 3),
(203, 20, 3, 3, 3),
(204, 11, 3, 3, 3),
(205, 12, 3, 3, 3),
(206, 20, 3, 3, 3),
(207, 13, 3, 3, 3),
(208, 28, 3, 3, 3),
(209, 14, 3, 3, 3),
(210, 20, 3, 3, 3),
(211, 28, 3, 3, 3),
(212, 12, 3, 3, 3),
(213, 28, 3, 3, 3),
(214, 11, 3, 3, 3),
(215, 12, 3, 3, 3),
(216, 20, 3, 3, 3),
(217, 13, 3, 3, 3),
(218, 28, 3, 3, 3),
(219, 14, 3, 3, 3),
(220, 20, 3, 3, 3),
(221, 14, 3, 3, 3),
(222, 12, 3, 3, 3),
(223, 14, 3, 3, 3),
(224, 11, 3, 3, 3),
(225, 12, 3, 3, 3),
(226, 20, 3, 3, 3),
(227, 13, 3, 3, 3),
(228, 28, 3, 3, 3),
(229, 14, 3, 3, 3),
(230, 20, 3, 3, 3),
(231, 28, 3, 3, 3),
(232, 12, 3, 3, 3),
(233, 28, 3, 3, 3),
(234, 11, 3, 3, 3),
(235, 12, 3, 3, 3),
(236, 20, 3, 3, 3),
(237, 13, 3, 3, 3),
(238, 28, 3, 3, 3),
(239, 14, 3, 3, 3),
(240, 13, 3, 3, 3),
(241, 14, 3, 3, 3),
(242, 12, 3, 3, 3),
(243, 14, 3, 3, 3),
(244, 11, 3, 3, 3),
(245, 12, 3, 3, 3),
(246, 20, 3, 3, 3),
(247, 13, 3, 3, 3),
(248, 28, 3, 3, 3),
(249, 14, 3, 3, 3),
(250, 20, 3, 3, 3),
(251, 14, 3, 3, 3),
(252, 12, 3, 3, 3),
(253, 14, 3, 3, 3),
(254, 11, 3, 3, 3),
(255, 12, 3, 3, 3),
(256, 20, 3, 3, 3),
(257, 13, 3, 3, 3),
(258, 28, 3, 3, 3),
(259, 14, 3, 3, 3),
(260, 13, 3, 3, 3),
(261, 14, 3, 3, 3),
(262, 12, 3, 3, 3),
(263, 14, 3, 3, 3),
(264, 11, 3, 3, 3),
(265, 12, 3, 3, 3),
(266, 20, 3, 3, 3),
(267, 13, 3, 3, 3),
(268, 28, 3, 3, 3),
(269, 14, 3, 3, 3),
(270, 20, 3, 3, 3),
(271, 14, 3, 3, 3),
(272, 12, 3, 3, 3),
(273, 14, 3, 3, 3),
(274, 11, 3, 3, 3),
(275, 12, 3, 3, 3),
(276, 20, 3, 3, 3),
(277, 13, 3, 3, 3),
(278, 28, 3, 3, 3),
(279, 14, 3, 3, 3),
(280, 13, 3, 3, 3),
(281, 14, 3, 3, 3),
(282, 12, 3, 3, 3),
(283, 14, 3, 3, 3),
(284, 11, 3, 3, 3),
(285, 12, 3, 3, 3),
(286, 20, 3, 3, 3),
(287, 13, 3, 3, 3),
(288, 28, 3, 3, 3),
(289, 14, 3, 3, 3),
(290, 13, 3, 3, 3),
(291, 14, 3, 3, 3),
(292, 12, 3, 3, 3),
(293, 14, 3, 3, 3),
(294, 11, 3, 3, 3),
(295, 12, 3, 3, 3),
(296, 20, 3, 3, 3),
(297, 13, 3, 3, 3),
(298, 28, 3, 3, 3),
(299, 14, 3, 3, 3),
(300, 13, 3, 3, 3),
(301, 14, 3, 3, 3),
(302, 12, 3, 3, 3),
(303, 14, 3, 3, 3),
(304, 11, 3, 3, 3),
(305, 12, 3, 3, 3),
(306, 20, 3, 3, 3),
(307, 13, 3, 3, 3),
(308, 28, 3, 3, 3),
(309, 14, 3, 3, 3),
(310, 13, 3, 3, 3),
(311, 14, 3, 3, 3),
(312, 12, 3, 3, 3),
(313, 14, 3, 3, 3),
(314, 11, 3, 3, 3),
(315, 12, 3, 3, 3),
(316, 20, 3, 3, 3),
(317, 13, 3, 3, 3),
(318, 12, 3, 3, 3),
(319, 14, 3, 3, 3),
(320, 13, 3, 3, 3),
(321, 14, 3, 3, 3),
(322, 20, 3, 3, 3),
(323, 14, 3, 3, 3),
(324, 13, 3, 3, 3),
(325, 28, 3, 3, 3),
(326, 14, 3, 3, 3),
(327, 13, 3, 3, 3),
(328, 14, 3, 3, 3),
(329, 12, 3, 3, 3),
(330, 14, 3, 3, 3),
(331, 11, 3, 3, 3),
(332, 12, 3, 3, 3),
(333, 20, 3, 3, 3),
(334, 13, 3, 3, 3),
(335, 12, 3, 3, 3),
(336, 14, 3, 3, 3),
(337, 13, 3, 3, 3),
(338, 14, 3, 3, 3),
(339, 20, 3, 3, 3),
(340, 14, 3, 3, 3),
(341, 13, 3, 3, 3),
(342, 28, 3, 3, 3),
(343, 13, 3, 3, 3),
(344, 13, 3, 3, 3),
(345, 14, 3, 3, 3),
(346, 12, 3, 3, 3),
(347, 28, 3, 3, 3),
(348, 14, 3, 3, 3),
(349, 13, 3, 3, 3),
(350, 14, 3, 3, 3),
(351, 12, 3, 3, 3),
(352, 14, 3, 3, 3),
(353, 11, 3, 3, 3),
(354, 12, 3, 3, 3),
(355, 20, 3, 3, 3),
(356, 13, 3, 3, 3),
(357, 12, 3, 3, 3),
(358, 14, 3, 3, 3),
(359, 13, 3, 3, 3),
(360, 14, 3, 3, 3),
(361, 20, 3, 3, 3),
(362, 14, 3, 3, 3),
(363, 13, 3, 3, 3),
(364, 28, 3, 3, 3),
(365, 13, 3, 3, 3),
(366, 13, 3, 3, 3),
(367, 14, 3, 3, 3),
(368, 12, 3, 3, 3),
(369, 28, 3, 3, 3),
(370, 14, 3, 3, 3),
(371, 13, 3, 3, 3),
(372, 14, 3, 3, 3),
(373, 12, 3, 3, 3),
(374, 14, 3, 3, 3),
(375, 11, 3, 3, 3),
(376, 12, 3, 3, 3),
(377, 20, 3, 3, 3),
(378, 13, 3, 3, 3),
(379, 12, 3, 3, 3),
(380, 14, 3, 3, 3),
(381, 13, 3, 3, 3),
(382, 14, 3, 3, 3),
(383, 20, 3, 3, 3),
(384, 14, 3, 3, 3),
(385, 13, 3, 3, 3),
(386, 28, 3, 3, 3),
(387, 13, 3, 3, 3),
(388, 13, 3, 3, 3),
(389, 14, 3, 3, 3),
(390, 12, 3, 3, 3),
(391, 28, 3, 3, 3),
(392, 14, 3, 3, 3),
(393, 13, 3, 3, 3),
(394, 14, 3, 3, 3),
(395, 12, 3, 3, 3),
(396, 14, 3, 3, 3),
(397, 11, 3, 3, 3),
(398, 12, 3, 3, 3),
(399, 20, 3, 3, 3),
(400, 13, 3, 3, 3),
(401, 12, 3, 3, 3),
(402, 14, 3, 3, 3),
(403, 13, 3, 3, 3),
(404, 14, 3, 3, 3),
(405, 20, 3, 3, 3),
(406, 14, 3, 3, 3),
(407, 13, 3, 3, 3),
(408, 28, 3, 3, 3),
(409, 13, 3, 3, 3),
(410, 13, 3, 3, 3),
(411, 14, 3, 3, 3),
(412, 12, 3, 3, 3),
(413, 28, 3, 3, 3),
(414, 14, 3, 3, 3),
(415, 13, 3, 3, 3),
(416, 14, 3, 3, 3),
(417, 12, 3, 3, 3),
(418, 14, 3, 3, 3),
(419, 11, 3, 3, 3),
(420, 12, 3, 3, 3),
(421, 20, 3, 3, 3),
(422, 13, 3, 3, 3),
(423, 12, 3, 3, 3),
(424, 14, 3, 3, 3),
(425, 13, 3, 3, 3),
(426, 14, 3, 3, 3),
(427, 20, 3, 3, 3),
(428, 14, 3, 3, 3),
(429, 13, 3, 3, 3),
(430, 28, 3, 3, 3),
(431, 13, 3, 3, 3),
(432, 13, 3, 3, 3),
(433, 14, 3, 3, 3),
(434, 12, 3, 3, 3),
(435, 28, 3, 3, 3),
(436, 14, 3, 3, 3),
(437, 13, 3, 3, 3),
(438, 14, 3, 3, 3),
(439, 12, 3, 3, 3),
(440, 14, 3, 3, 3),
(441, 11, 3, 3, 3),
(442, 12, 3, 3, 3),
(443, 20, 3, 3, 3),
(444, 13, 3, 3, 3),
(445, 12, 3, 3, 3),
(446, 14, 3, 3, 3),
(447, 13, 3, 3, 3),
(448, 14, 3, 3, 3),
(449, 20, 3, 3, 3),
(450, 14, 3, 3, 3),
(451, 13, 3, 3, 3),
(452, 28, 3, 3, 3),
(453, 13, 3, 3, 3),
(454, 13, 3, 3, 3),
(455, 14, 3, 3, 3),
(456, 12, 3, 3, 3),
(457, 28, 3, 3, 3),
(458, 14, 3, 3, 3),
(459, 13, 3, 3, 3),
(460, 14, 3, 3, 3),
(461, 12, 3, 3, 3),
(462, 14, 3, 3, 3),
(463, 11, 3, 3, 3),
(464, 12, 3, 3, 3),
(465, 20, 3, 3, 3),
(466, 13, 3, 3, 3),
(467, 28, 3, 3, 3),
(468, 14, 3, 3, 3),
(469, 13, 3, 3, 3),
(470, 14, 3, 3, 3),
(471, 12, 3, 3, 3),
(472, 14, 3, 3, 3),
(473, 11, 3, 3, 3),
(474, 12, 3, 3, 3),
(475, 20, 3, 3, 3),
(476, 13, 3, 3, 3),
(477, 28, 3, 3, 3),
(478, 14, 3, 3, 3),
(479, 13, 3, 3, 3),
(480, 14, 3, 3, 3),
(481, 12, 3, 3, 3),
(482, 14, 3, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneos`
--

CREATE TABLE `torneos` (
  `ID_TORNEO` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `DESCRIPCION` varchar(1000) NOT NULL,
  `HORA` time(6) DEFAULT NULL,
  `FECHA` date NOT NULL,
  `ESTADO` varchar(1) NOT NULL,
  `IM5` varchar(1) NOT NULL,
  `I56` varchar(1) NOT NULL,
  `I78` varchar(1) NOT NULL,
  `I910` varchar(1) NOT NULL,
  `I1112` varchar(1) NOT NULL,
  `J1314` varchar(1) NOT NULL,
  `J1516` varchar(1) NOT NULL,
  `A17` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `torneos`
--

INSERT INTO `torneos` (`ID_TORNEO`, `NOMBRE`, `DESCRIPCION`, `HORA`, `FECHA`, `ESTADO`, `IM5`, `I56`, `I78`, `I910`, `I1112`, `J1314`, `J1516`, `A17`) VALUES
(3, 'Copa Telmex', 'Torneo abierto a todas cintas y todas edades. Contará con un total de seis áreas en el estado\r\n                                    de Durango, Durango En el gimnacion del CCH y tomará inicio a las 9 am.', '09:00:00.000000', '2018-06-02', 'A', 'S', 'S', 'S', 'S', 'S', 'S', 'N', 'N'),
(4, 'Copa Corona', 'orneo abierto a todas cintas y todas edades. Contará con un total de seis áreas en el estado\r\n                                    de Durango, Durango En el gimnacion del CCH y tomará inicio a las 9 am.', '09:00:00.000000', '2018-06-08', 'I', 'N', 'N', 'N', 'N', 'S', 'S', 'S', 'S');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`ID_ADMINISTRADOR`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`ID_ALUMNO`),
  ADD KEY `ID_MAESTRO` (`ID_MAESTRO`);

--
-- Indices de la tabla `concursantes`
--
ALTER TABLE `concursantes`
  ADD PRIMARY KEY (`ID_CONCURSANTE`),
  ADD KEY `ID_TORNEO` (`ID_TORNEO`),
  ADD KEY `ID_PARTICIPANTE` (`ID_ALUMNO`);

--
-- Indices de la tabla `difeenfrentamientos`
--
ALTER TABLE `difeenfrentamientos`
  ADD PRIMARY KEY (`ID_DIFEENFRENTAMIENTO`),
  ADD KEY `ID_ALUMNO` (`ID_ALUMNO`);

--
-- Indices de la tabla `gyms`
--
ALTER TABLE `gyms`
  ADD PRIMARY KEY (`ID_GYM`);

--
-- Indices de la tabla `jueces`
--
ALTER TABLE `jueces`
  ADD PRIMARY KEY (`ID_JUEZ`);

--
-- Indices de la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD PRIMARY KEY (`ID_MAESTRO`),
  ADD KEY `ID_GYM` (`ID_GYM`);

--
-- Indices de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD PRIMARY KEY (`ID_PUNTUACION`),
  ADD KEY `id_participante` (`ID_ALUMNO`),
  ADD KEY `ID_ALUMNO` (`ID_ALUMNO`),
  ADD KEY `ID_TORNEO` (`ID_TORNEO`);

--
-- Indices de la tabla `torneos`
--
ALTER TABLE `torneos`
  ADD PRIMARY KEY (`ID_TORNEO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `ID_ADMINISTRADOR` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `ID_ALUMNO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `concursantes`
--
ALTER TABLE `concursantes`
  MODIFY `ID_CONCURSANTE` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `difeenfrentamientos`
--
ALTER TABLE `difeenfrentamientos`
  MODIFY `ID_DIFEENFRENTAMIENTO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT de la tabla `gyms`
--
ALTER TABLE `gyms`
  MODIFY `ID_GYM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de la tabla `jueces`
--
ALTER TABLE `jueces`
  MODIFY `ID_JUEZ` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `maestros`
--
ALTER TABLE `maestros`
  MODIFY `ID_MAESTRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  MODIFY `ID_PUNTUACION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=483;
--
-- AUTO_INCREMENT de la tabla `torneos`
--
ALTER TABLE `torneos`
  MODIFY `ID_TORNEO` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`ID_MAESTRO`) REFERENCES `maestros` (`ID_MAESTRO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `concursantes`
--
ALTER TABLE `concursantes`
  ADD CONSTRAINT `concursantes_ibfk_1` FOREIGN KEY (`ID_TORNEO`) REFERENCES `torneos` (`ID_TORNEO`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `concursantes_ibfk_2` FOREIGN KEY (`ID_ALUMNO`) REFERENCES `alumnos` (`ID_ALUMNO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `difeenfrentamientos`
--
ALTER TABLE `difeenfrentamientos`
  ADD CONSTRAINT `difeenfrentamientos_ibfk_1` FOREIGN KEY (`ID_ALUMNO`) REFERENCES `alumnos` (`ID_ALUMNO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD CONSTRAINT `maestros_ibfk_1` FOREIGN KEY (`ID_GYM`) REFERENCES `gyms` (`ID_GYM`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD CONSTRAINT `puntuaciones_ibfk_1` FOREIGN KEY (`ID_ALUMNO`) REFERENCES `alumnos` (`ID_ALUMNO`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `puntuaciones_ibfk_2` FOREIGN KEY (`ID_TORNEO`) REFERENCES `torneos` (`ID_TORNEO`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
