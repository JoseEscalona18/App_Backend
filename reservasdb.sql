-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-03-2023 a las 23:20:15
-- Versión del servidor: 10.10.2-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `Serial` varchar(250) NOT NULL,
  `Adquisicion` date NOT NULL,
  `Estatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


CREATE TABLE `Acceso` (
  `id` smallint(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `Nombre` varchar(100) NOT NULL,
  `CI` int(11) NOT NULL,
  `Clave` varchar(250) NOT NULL,
  `Rol` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`Nombre`, `Descripcion`, `Serial`, `Adquisicion`, `Estatus`) VALUES
('Sennheiser MD421', 'Microfono de solapa', '2345234', '2022-10-15', 'Disponible'),
('Nikon D5100', 'Camara de video de estudio profesional', '2345634', '2022-10-15', 'Ocupado'),
('Rode NT1A', 'Microfono profesional', '25445454', '2022-10-01', 'Ocupado'),
('Canon EOS 4000D', 'Camara de video de estudio profesional', '2650626', '2022-10-01', 'Disponible'),
('Sony FX30', 'Camara Compacta profesional de video', '423753', '2022-10-10', 'Ocupado'),
('OPTIPLEX DT3020', 'Intel core i5, 4gb RAM, 500gb HDD', '4357424', '2022-10-15', 'Ocupado'),
('Samsung S22 Ultra', 'Teléfono Xaomi gama alta', '54353723', '2022-11-15', 'Disponible'),
('Shure SM57', 'Microfono de estudio profesional', '6653432', '2022-10-10', 'Ocupado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `espacios`
--

CREATE TABLE `espacios` (
  `ID_Espacio` smallint(6) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(250) DEFAULT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Estatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `espacios`
--

INSERT INTO `espacios` (`ID_Espacio`, `Nombre`, `Descripcion`, `Direccion`, `Estatus`) VALUES
(1, 'Estudio 1', 'Estudio de grabacion numero 1', 'Salon N16', 'Disponible'),
(2, 'Estudio 2', 'Estudio de grabacion numero 2', 'Salon N17', 'Ocupado'),
(3, 'Estudio 3', 'Estudio de grabacion numero 3', 'Salon N18', 'Ocupado'),
(4, 'Estudio 4', 'Estudio de grabacion numero 4', 'Salon N19', 'Disponible'),
(5, 'Cuarto de edicion', 'Cuarto donde se hace la edicion de video', 'Salon N25', 'Ocupado'),
(6, 'Cuarto de diseño', 'Cuarto donde se hace el diseño del entorno', 'Salon N30', 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `Nombre` varchar(100) NOT NULL,
  `CI` int(11) NOT NULL,
  `Cargo` varchar(100) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Especialidad` varchar(100) NOT NULL,
  `Estatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`Nombre`, `CI`, `Cargo`, `Usuario`, `Contraseña`, `Especialidad`, `Estatus`) VALUES
('Juan Colmenares', 24859297, 'Diseñador', 'Juan2', '15925445', 'Diseñador Grafico', 'Disponible'),
('Julio Teran', 25932874, 'Escenografia', 'JuTe', '122213', 'Director de Escenografia', 'Ocupado'),
('Roberto Di Michele', 27292743, 'Director', 'AMII', '634332', 'Ingeniero en Computacion', 'Disponible'),
('Jose Luis', 29302745, 'Camarografo', 'Jolu', '19432', 'Director de Fotografia', 'Ocupado'),
('Valentina Balza', 30214932, 'Maquillaje', 'Vale', '1516135', 'Caracterización Cinematografica a traves del Maquillaje', 'Disponible'),
('Maikel Villegas', 30302836, 'Editor', 'CaTiT0rV', '12345', 'Edición de Videos', 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasequipos`
--

CREATE TABLE `reservasequipos` (
  `ID` int(11) NOT NULL,
  `Nombre_Solicitante` varchar(100) NOT NULL,
  `CI_Solicitante` int(11) NOT NULL,
  `FechaInicio` date NOT NULL,
  `FechaFin` date NOT NULL,
  `HoraInicio` time NOT NULL,
  `HoraFi` time NOT NULL,
  `SerialesE` varchar(250) NOT NULL,
  `Equipos` varchar(100) NOT NULL,
  `Motivo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `reservasequipos`
--

INSERT INTO `reservasequipos` (`ID`, `Nombre_Solicitante`, `CI_Solicitante`, `FechaInicio`, `FechaFin`, `HoraInicio`, `HoraFi`, `SerialesE`, `Equipos`, `Motivo`) VALUES
(1, 'Mauricio Verde', 28732194, '2004-06-23', '2004-06-23', '12:00:00', '14:00:00', '4357424', 'OPTIPLEX DT3020\r\n', 'Edición de Videos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservasespacios`
--

CREATE TABLE `reservasespacios` (
  `ID` int(11) NOT NULL,
  `Nombre_Solicitante` varchar(100) NOT NULL,
  `CI_Solicitante` int(11) NOT NULL,
  `FechaInicio` date NOT NULL,
  `FechaFin` date NOT NULL,
  `HoraInicio` time NOT NULL,
  `HoraFi` time NOT NULL,
  `ID_Espa` smallint(6) NOT NULL,
  `Espacio` varchar(100) NOT NULL,
  `Motivo` varchar(250) NOT NULL,
  `Tecnico` varchar(100) NOT NULL,
  `CI_Tecnico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `reservasespacios`
--

INSERT INTO `reservasespacios` (`ID`, `Nombre_Solicitante`, `CI_Solicitante`, `FechaInicio`, `FechaFin`, `HoraInicio`, `HoraFi`, `ID_Espa`, `Espacio`, `Motivo`, `Tecnico`, `CI_Tecnico`) VALUES
(1, 'Chuck Norris', 25928384, '2023-04-23', '2023-04-23', '12:00:00', '14:00:00', 3, 'Estudio de grabacion numero 3', 'Grabación de Escena', 'Maikel Villegas', 30302836);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitantes`
--

CREATE TABLE `solicitantes` (
  `Nombre` varchar(100) NOT NULL,
  `CI` int(11) NOT NULL,
  `FechaN` date NOT NULL,
  `Direccion` varchar(250) DEFAULT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Telefono` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `solicitantes`
--

INSERT INTO `solicitantes` (`Nombre`, `CI`, `FechaN`, `Direccion`, `Usuario`, `Contraseña`, `Telefono`) VALUES
('Chuck Norris', 25928384, '2005-12-22', 'Carvajal', 'Aea25', 'j213131', 4264549792),
('Maradona Fernandez', 27352164, '1992-09-25', 'La Cejita', 'MarFer', 'Drojita', 4148957321),
('Mauricio Verde', 28732194, '1989-03-12', 'Campo Alegre', 'Sanns2', 'Snahs123', 4269218724),
('Paola Rojas', 28751392, '2001-07-19', 'Motatan', 'Benito2', '192223', 4148322072),
('Mike Norris', 29837294, '2004-07-25', 'La Puerta', 'PuertitaR', 'Puertota1', 4249528721),
('Juan Rosales', 30912875, '1999-03-19', 'Valera', 'JuaRo', 'Juandrossss', 4148329572);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`Serial`);

--
-- Indices de la tabla `espacios`
--
ALTER TABLE `espacios`
  ADD PRIMARY KEY (`ID_Espacio`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`CI`);

--
-- Indices de la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_SerialesE` (`SerialesE`),
  ADD KEY `EquipoSCI` (`CI_Solicitante`);

--
-- Indices de la tabla `reservasespacios`
--
ALTER TABLE `reservasespacios`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `EspacioID` (`ID_Espa`),
  ADD KEY `EspacioSCI` (`CI_Solicitante`),
  ADD KEY `EspacioTCI` (`CI_Tecnico`);

--
-- Indices de la tabla `solicitantes`
--
ALTER TABLE `solicitantes`
  ADD PRIMARY KEY (`CI`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `espacios`
--
ALTER TABLE `espacios`
  MODIFY `ID_Espacio` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reservasespacios`
--
ALTER TABLE `reservasespacios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  ADD CONSTRAINT `EquipoSCI` FOREIGN KEY (`CI_Solicitante`) REFERENCES `solicitantes` (`CI`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_SerialesE` FOREIGN KEY (`SerialesE`) REFERENCES `equipos` (`Serial`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservasespacios`
--
ALTER TABLE `reservasespacios`
  ADD CONSTRAINT `EspacioID` FOREIGN KEY (`ID_Espa`) REFERENCES `espacios` (`ID_Espacio`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EspacioSCI` FOREIGN KEY (`CI_Solicitante`) REFERENCES `solicitantes` (`CI`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EspacioTCI` FOREIGN KEY (`CI_Tecnico`) REFERENCES `personal` (`CI`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
