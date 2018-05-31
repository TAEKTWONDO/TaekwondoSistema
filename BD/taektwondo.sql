-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2018 a las 19:34:03
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

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
  `CONTRASENA` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cintas`
--

CREATE TABLE `cintas` (
  `ID_CINTA` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concursantes`
--

CREATE TABLE `concursantes` (
  `ID_CONCURSANTE` int(10) NOT NULL,
  `ID_TORNEO` int(10) NOT NULL,
  `ID_MAESTRO` int(10) NOT NULL,
  `ID_PARTICIPANTE` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gym's`
--

CREATE TABLE `gym's` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `TELEFONO` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `ID_MAESTRO` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `TELEFONO` varchar(12) NOT NULL,
  `ID_GYM` int(11) NOT NULL,
  `CONTRASENA` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participantes`
--

CREATE TABLE `participantes` (
  `ID_PARTICIPANTE` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `APELLIDOS` varchar(200) NOT NULL,
  `ID_CINTA` int(10) NOT NULL,
  `EDAD` int(2) NOT NULL,
  `ALTURA` float NOT NULL,
  `PESO` float NOT NULL,
  `SEXO` varchar(1) NOT NULL,
  `ID_MAESTRO` int(10) NOT NULL,
  `ID_GYM` int(11) NOT NULL,
  `CONTRASENA` varchar(10) NOT NULL,
  `CIUDAD` varchar(200) NOT NULL,
  `ESTADO` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneos`
--

CREATE TABLE `torneos` (
  `ID_TORNEO` int(10) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `LUGAR` varchar(200) NOT NULL,
  `FECHA` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`ID_ADMINISTRADOR`);

--
-- Indices de la tabla `cintas`
--
ALTER TABLE `cintas`
  ADD PRIMARY KEY (`ID_CINTA`);

--
-- Indices de la tabla `concursantes`
--
ALTER TABLE `concursantes`
  ADD PRIMARY KEY (`ID_CONCURSANTE`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
