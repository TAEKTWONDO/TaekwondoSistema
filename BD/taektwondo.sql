-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-08-2018 a las 19:19:23
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
(96, 11, 5, 7, 'P'),
(97, 20, 4, 7, 'P'),
(98, 28, 9, 8, 'G'),
(99, 20, 1, 2, 'P'),
(100, 12, 3, 4, 'P'),
(101, 11, 4, 6, 'P'),
(102, 20, 8, 5, 'G'),
(103, 14, 0, 4, 'P'),
(104, 20, 5, 6, 'P'),
(105, 12, 7, 8, 'P'),
(106, 11, 3, 3, 'E'),
(107, 20, 3, 3, 'E'),
(108, 28, 3, 3, 'E'),
(109, 13, 3, 3, 'E'),
(110, 12, 3, 3, 'E');

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
(6, 'Karem', 'Reyes', 618469745, 'ana2', 'karem@gmail.com');

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
-- Estructura de tabla para la tabla `peleadores`
--

CREATE TABLE `peleadores` (
  `id_peleadores` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_contricante` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peleadores`
--

INSERT INTO `peleadores` (`id_peleadores`, `id_alumno`, `id_contricante`) VALUES
(50, 28, 14),
(49, 20, 13),
(48, 11, 12),
(47, 28, 14),
(46, 20, 13),
(45, 11, 12),
(44, 28, 14),
(43, 20, 13),
(42, 11, 12),
(41, 28, 14),
(40, 20, 13),
(39, 11, 12);

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
(570, 11, 3, 5, 5),
(571, 20, 3, 7, 7),
(572, 28, 3, 4, 4),
(573, 20, 3, 7, 7),
(574, 12, 3, 9, 9),
(575, 11, 3, 4, 4),
(576, 20, 3, 6, 6),
(577, 28, 3, 8, 8),
(578, 20, 3, 5, 5),
(579, 12, 3, 0, 0),
(580, 11, 3, 3, 3),
(581, 20, 3, 3, 3),
(582, 28, 3, 3, 3),
(583, 13, 3, 3, 3),
(584, 12, 3, 3, 3);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weka_datos`
--

CREATE TABLE `weka_datos` (
  `id_weka_dato` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `total_puntaje` decimal(11,0) NOT NULL,
  `dif_puntuaje` decimal(11,0) NOT NULL,
  `dif_edad` decimal(11,0) NOT NULL,
  `dif_altura` decimal(11,0) NOT NULL,
  `dif_cinta` decimal(11,0) NOT NULL,
  `dif_combates` decimal(11,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `weka_datos`
--

INSERT INTO `weka_datos` (`id_weka_dato`, `id_alumno`, `total_puntaje`, `dif_puntuaje`, `dif_edad`, `dif_altura`, `dif_cinta`, `dif_combates`) VALUES
(1, 8, '4', '4', '1', '1', '1', '2'),
(6, 5, '2', '-3', '0', '1', '0', '-1'),
(7, 2, '4', '3', '0', '-1', '0', '0'),
(8, 3, '1', '-3', '0', '1', '0', '0'),
(9, 2, '5', '2', '-1', '-1', '-1', '0'),
(10, 4, '3', '-2', '1', '1', '1', '0'),
(11, 2, '7', '4', '0', '-1', '-1', '1'),
(12, 5, '3', '-4', '0', '1', '1', '-1'),
(13, 4, '10', '2', '0', '-1', '0', '2'),
(14, 6, '8', '-2', '0', '1', '0', '0'),
(15, 6, '9', '3', '0', '0', '0', '1'),
(16, 7, '6', '-3', '0', '0', '0', '-1'),
(17, 5, '8', '1', '0', '-2', '0', '1'),
(18, 7, '7', '-1', '0', '2', '0', '-1'),
(27, 2, '0', '0', '0', '0', '0', '0'),
(28, 2, '0', '0', '0', '0', '0', '0'),
(29, 2, '0', '0', '0', '0', '0', '0'),
(30, 2, '0', '0', '0', '0', '0', '0'),
(31, 2, '0', '0', '0', '0', '0', '0'),
(32, 2, '0', '0', '0', '0', '0', '0'),
(33, 3, '0', '0', '0', '0', '0', '0'),
(34, 3, '0', '0', '0', '0', '0', '0'),
(35, 3, '0', '0', '0', '0', '0', '0'),
(36, 3, '0', '0', '0', '0', '0', '0'),
(37, 3, '0', '0', '0', '0', '0', '0'),
(38, 3, '0', '0', '0', '0', '0', '0'),
(39, 3, '0', '0', '0', '0', '0', '0'),
(40, 3, '0', '0', '0', '0', '0', '0'),
(41, 4, '0', '0', '0', '0', '0', '0'),
(42, 4, '0', '0', '0', '0', '0', '0'),
(43, 4, '0', '0', '0', '0', '0', '0'),
(44, 4, '0', '0', '0', '0', '0', '0'),
(45, 4, '0', '0', '0', '0', '0', '0'),
(46, 4, '0', '0', '0', '0', '0', '0'),
(47, 4, '0', '0', '0', '0', '0', '0'),
(48, 4, '0', '0', '0', '0', '0', '0'),
(49, 4, '0', '0', '0', '0', '0', '0'),
(50, 5, '0', '0', '0', '0', '0', '0'),
(51, 5, '0', '0', '0', '0', '0', '0'),
(52, 5, '0', '0', '0', '0', '0', '0'),
(53, 5, '0', '0', '0', '0', '0', '0'),
(54, 5, '0', '0', '0', '0', '0', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weka_datos2`
--

CREATE TABLE `weka_datos2` (
  `id_weka_dato` int(255) NOT NULL,
  `id_alumno` int(11) DEFAULT NULL,
  `edad_alumno` varchar(255) DEFAULT NULL,
  `cinta_alumno` varchar(255) DEFAULT NULL,
  `altura_alumno` double(25,1) DEFAULT NULL,
  `puntaje_total` varchar(255) DEFAULT NULL,
  `puntaje_contrincante` varchar(255) DEFAULT NULL,
  `diferencia_puntaje` varchar(255) DEFAULT NULL,
  `edad_contrincante` varchar(255) DEFAULT NULL,
  `altura_contrincante` double(25,1) DEFAULT NULL,
  `cinta_contrincante` varchar(255) DEFAULT NULL,
  `combates_contrincantes` int(11) DEFAULT NULL,
  `combates_alumno` int(11) DEFAULT NULL,
  `resultado` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `weka_datos2`
--

INSERT INTO `weka_datos2` (`id_weka_dato`, `id_alumno`, `edad_alumno`, `cinta_alumno`, `altura_alumno`, `puntaje_total`, `puntaje_contrincante`, `diferencia_puntaje`, `edad_contrincante`, `altura_contrincante`, `cinta_contrincante`, `combates_contrincantes`, `combates_alumno`, `resultado`) VALUES
(316, 28, '10', 'Amarilla', 1.3, '9', '8', '1', '10', 1.3, 'Amarilla', 4, 4, 'Gano'),
(317, 20, '10', 'Blanca', 1.2, '3', '3', '0', '10', 1.2, 'Blanca', 4, 4, 'Perdio'),
(318, 11, '10', 'Amarilla', 1.4, '4', '7', '-3', '10', 1.4, 'Amarilla', 4, 4, 'Perdio'),
(319, 28, '10', 'Amarilla', 1.3, '1', '2', '-1', '10', 1.3, 'Amarilla', 4, 4, 'Perdio'),
(320, 20, '10', 'Blanca', 1.2, '8', '5', '3', '10', 1.2, 'Blanca', 4, 4, 'Gano'),
(321, 11, '10', 'Amarilla', 1.4, '5', '6', '-1', '10', 1.4, 'Amarilla', 4, 4, 'Perdio'),
(322, 28, '10', 'Amarilla', 1.3, '3', '3', '0', '10', 1.3, 'Amarilla', 4, 4, 'Perdio'),
(323, 20, '10', 'Blanca', 1.2, '5', '7', '-2', '10', 1.2, 'Blanca', 4, 4, 'Perdio'),
(324, 11, '10', 'Amarilla', 1.4, '4', '6', '-2', '10', 1.4, 'Amarilla', 4, 4, 'Perdio'),
(325, 28, '10', 'Amarilla', 1.3, '3', '3', '0', '10', 1.3, 'Amarilla', 4, 4, 'Perdio'),
(326, 20, '10', 'Blanca', 1.2, '9', '8', '1', '10', 1.2, 'Blanca', 4, 4, 'Gano'),
(327, 11, '10', 'Amarilla', 1.4, '3', '3', '0', '10', 1.4, 'Amarilla', 4, 4, 'Perdio');

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
-- Indices de la tabla `peleadores`
--
ALTER TABLE `peleadores`
  ADD PRIMARY KEY (`id_peleadores`);

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
-- Indices de la tabla `weka_datos`
--
ALTER TABLE `weka_datos`
  ADD PRIMARY KEY (`id_weka_dato`),
  ADD KEY `id_alumno` (`id_alumno`);

--
-- Indices de la tabla `weka_datos2`
--
ALTER TABLE `weka_datos2`
  ADD PRIMARY KEY (`id_weka_dato`),
  ADD KEY `id_alumno` (`id_alumno`);

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
  MODIFY `ID_DIFEENFRENTAMIENTO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
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
-- AUTO_INCREMENT de la tabla `peleadores`
--
ALTER TABLE `peleadores`
  MODIFY `id_peleadores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  MODIFY `ID_PUNTUACION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=585;
--
-- AUTO_INCREMENT de la tabla `torneos`
--
ALTER TABLE `torneos`
  MODIFY `ID_TORNEO` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `weka_datos`
--
ALTER TABLE `weka_datos`
  MODIFY `id_weka_dato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
--
-- AUTO_INCREMENT de la tabla `weka_datos2`
--
ALTER TABLE `weka_datos2`
  MODIFY `id_weka_dato` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=328;
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

--
-- Filtros para la tabla `weka_datos`
--
ALTER TABLE `weka_datos`
  ADD CONSTRAINT `weka_datos_ibfk_1` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`ID_ALUMNO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `weka_datos2`
--
ALTER TABLE `weka_datos2`
  ADD CONSTRAINT `id_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`ID_ALUMNO`) ON DELETE SET NULL ON UPDATE SET NULL;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
