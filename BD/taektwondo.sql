-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2018 a las 13:49:59
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
(29, 'Marco', 'Polo', 'Amarilla', 12, 1.5, 'M', 19);

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
(12, 3, 29);

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
(133, 9, 3, 3, 3);

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
(3, 'Copa Telmex', 'Torneo abierto a todas cintas y todas edades. Contará con un total de seis áreas en el estado\r\n                                    de Durango, Durango En el gimnacion del CCH y tomará inicio a las 9 am.', '09:00:00.000000', '2018-06-02', 'A', 'S', 'S', 'S', 'S', 'S', 'N', 'N', 'N'),
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
  MODIFY `ID_ALUMNO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT de la tabla `concursantes`
--
ALTER TABLE `concursantes`
  MODIFY `ID_CONCURSANTE` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
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
  MODIFY `ID_PUNTUACION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;
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
