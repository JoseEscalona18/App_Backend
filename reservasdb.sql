-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2023 a las 15:33:41
-- Versión del servidor: 10.4.27-MariaDB
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
-- Estructura de tabla para la tabla `accesoadmin`
--

CREATE TABLE `accesoadmin` (
  `id` smallint(6) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `CI` int(11) NOT NULL,
  `Usuario` varchar(100) NOT NULL,
  `Contraseña` varchar(250) NOT NULL,
  `Rol` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `accesoadmin`
--

INSERT INTO `accesoadmin` (`id`, `Nombre`, `CI`, `Usuario`, `Contraseña`, `Rol`) VALUES
(1, 'Jose Escalona', 28206133, 'Esca', '$2a$10$Cq3tAb3tmHpaqIjk3Ph5T.qvOLvtoKnIKWR/5b7EllO0Drun9Qvhu', 'Admin'),
(2, 'Luis Monsalve', 14563287, 'Fifa23', '$2a$10$Z9ENsSwIu8TxRzA2S3HYgefm5K4CUoPH6AoX.YRxAFfm42Rsyu5my', 'Admin'),
(3, 'Juan Rosales', 88587942, 'beaglz', '$2a$10$TQZOPwNRWXrFTYG6ELExp.fTy5UU288puQ2l4.55r/pAG8Cjn7Rn6', 'Admin'),
(4, 'Maikel Villegas', 30302836, 'MaiMai', '$2a$10$XldNzhQMkUoJLs64KYDfNOSqGcoQXEpLedEnroI121DftPDdWN6pm', 'Admin'),
(5, 'Roberto Di Michele', 78965852, 'Backend', '$2a$10$a.vYASuDmHJC5UAOixyTq.EfAWHkthTVENXQu4ig2EmvAGyfTB0o6', 'Admin');

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
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `ID` smallint(6) NOT NULL,
  `ProdCompr` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `PrecioTotal` varchar(100) NOT NULL,
  `FechaC` date NOT NULL,
  `HoraC` time NOT NULL,
  `DomicilioF` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `Proveedor` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `CIF_P` varchar(128) DEFAULT NULL,
  `SerialPr` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `CI_Admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`ID`, `ProdCompr`, `PrecioTotal`, `FechaC`, `HoraC`, `DomicilioF`, `Proveedor`, `CIF_P`, `SerialPr`, `CI_Admin`) VALUES
(1, 'Rode NT1A', '280$', '2022-10-01', '14:00:00', 'Mirabel', 'Amazon', 92918, '25445454', 30302836);

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
  `Rol` varchar(100) NOT NULL,
  `Estatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`Nombre`, `CI`, `Cargo`, `Usuario`, `Contraseña`, `Especialidad`, `Rol`, `Estatus`) VALUES
('Juan Colmenares', 24859297, 'Diseñador', 'Juan2', '$2a$10$3MUnJf9GSe9n7McAcK/GWulWoHAV0Ta4lbrP/hh809CK5H4TBoUG2', 'Diseñador Grafico', 'Personal', 'Disponible'),
('Julio Teran', 25932874, 'Escenografia', 'JuTe', '$2a$10$FK6QKkvBbOEt/wareikqhen004MM2HfwPqGB5vPZxvoafOgZBWkOa', 'Director de Escenografia', 'Personal', 'Ocupado'),
('Roberto Di Michele', 27292743, 'Director', 'AMII', '$2a$10$u20GGMyH2yQcy2WfIYnjB.e5Dzu4NzuXl4MTtL.3DmxKbBsn.Vpie', 'Ingeniero en Computacion', 'Personal', 'Disponible'),
('Jose Luis', 29302745, 'Camarografo', 'Jolu', '$2a$10$iuEtvtJP3p3PSek4z/ejgeDkIDz9Cu/cILoTKdBMf4NGMdHFsEZDy', 'Director de Fotografia', 'Personal', 'Ocupado'),
('Valentina Balza', 30214932, 'Maquillaje', 'Vale', '$2a$10$hbwqVtsjSZbGZIRbXWl/OeAX19JZqObR4HY5hlUq9qi7fRnG07o7i', 'Caracterización Cinematografica a traves del Maquillaje', 'Personal', 'Disponible'),
('Maikel Villegas', 30302836, 'Editor', 'CaTiT0rV', '$2a$10$yyklNkTtf1nGvjloQneOLe3LFrk6BmFf28YCUfflFV.nKoHBQbXQe', 'Edición de Videosasasa', 'Personal', 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `Empresa` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `CIF` varchar(128) NOT NULL,
  `WEB` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `NumeroM` int(8) DEFAULT NULL,
  `TipodeS` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`Empresa`, `CIF`, `WEB`, `NumeroM`, `TipodeS`) VALUES
('Waconsin', '92918', 'www.wascons.com', 42493528, 'Proveedor de Espacios');

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
  `Telefono` bigint(20) DEFAULT NULL,
  `Rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `solicitantes`
--

INSERT INTO `solicitantes` (`Nombre`, `CI`, `FechaN`, `Direccion`, `Usuario`, `Contraseña`, `Telefono`, `Rol`) VALUES
('Chuck Norris', 25928384, '2005-12-22', 'Carvajal', 'Aea25', '$2a$10$OKN2KYbV./x45XXwIDY/yOATkwIyhg0lgI/ViyozMcdhuisGU1CPu', 4264549792, 'Solicitante'),
('Maradona Fernandez', 27352164, '1992-09-25', 'La Cejita', 'MarFer', '$2a$10$anRq3yaS46fAeqmj1tRBM.ZVbzKK5AiCizYe01Bde/efbtnJwT/3u', 4148957321, 'Solicitante'),
('Mauricio Verde', 28732194, '1989-03-12', 'Campo Alegre', 'Sanns2', '$2a$10$DpkLYX.4Z0.PlReFCxD0a.cFCLN3LxwlL/QvdofVi5KbAHIfvCub2', 4269218724, 'Solicitante'),
('Paola Rojas', 28751392, '2001-07-19', 'Motatan', 'Benito2', '$2a$10$Wj4Rm2N.UptiMjmcz.d4Tu8/X5oTltJbZK7M1U2Ep4CV1hvju.1x.', 4148322072, 'Solicitante'),
('Mike Norris', 29837294, '2004-07-25', 'La Puerta', 'PuertitaR', '$2a$10$EoIV3QTn6htn2HPvDvYPYeFX5lsctdl3wKcBuXKb7INNQnQGwWHOi', 4249528721, 'Solicitante'),
('Juan Rosales', 30912875, '1999-03-19', 'Valera', 'JuaRo', '$2a$10$9Xs5NJDtDE5PUjUNCjIxM.LQYH9WzHhadyQ.J.8wUmbN7CKta.BWm', 4148329572, 'Solicitante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `ID_Trabajo` int(11) NOT NULL,
  `Trabajo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `Nombre_Solicitante` varchar(100) NOT NULL,
  `ID_ReservaEs` int(11) DEFAULT NULL,
  `ID_ReservaEq` int(11) DEFAULT NULL,
  `Descripcion` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`ID_Trabajo`, `Trabajo`, `Nombre_Solicitante`, `ID_ReservaEs`, `ID_ReservaEq`, `Descripcion`) VALUES
(1, 'Edición de Videos', 'Mauricio Verde', 0, 1, 'Editar un video referente a los metaversos, intentando hacerlo divertido para niños, con 20 mins de duración');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accesoadmin`
--
ALTER TABLE `accesoadmin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CI` (`CI`);

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
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CIF-PP` (`CIF_P`),
  ADD KEY `EquiposSEriales` (`SerialPr`),
  ADD KEY `CI_Admin` (`CI_Admin`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`CI`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`CIF`);

--
-- Indices de la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `EquipoSCI` (`CI_Solicitante`),
  ADD KEY `fk_SerialesE` (`SerialesE`);

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
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`ID_Trabajo`),
  ADD KEY `IDEquiposR` (`ID_ReservaEq`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accesoadmin`
--
ALTER TABLE `accesoadmin`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `espacios`
--
ALTER TABLE `espacios`
  MODIFY `ID_Espacio` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `ID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reservasespacios`
--
ALTER TABLE `reservasespacios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `ID_Trabajo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `Admins` FOREIGN KEY (`CI_Admin`) REFERENCES `accesoadmin` (`CI`),
  ADD CONSTRAINT `CIF-PP` FOREIGN KEY (`CIF_P`) REFERENCES `proveedores` (`CIF`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `EquiposSEriales` FOREIGN KEY (`SerialPr`) REFERENCES `equipos` (`Serial`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservasequipos`
--
ALTER TABLE `reservasequipos`
  ADD CONSTRAINT `EquipoSCI` FOREIGN KEY (`CI_Solicitante`) REFERENCES `solicitantes` (`CI`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_SerialesE` FOREIGN KEY (`SerialesE`) REFERENCES `equipos` (`Serial`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservasespacios`
--
ALTER TABLE `reservasespacios`
  ADD CONSTRAINT `EspacioID` FOREIGN KEY (`ID_Espa`) REFERENCES `espacios` (`ID_Espacio`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `EspacioSCI` FOREIGN KEY (`CI_Solicitante`) REFERENCES `solicitantes` (`CI`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `EspacioTCI` FOREIGN KEY (`CI_Tecnico`) REFERENCES `personal` (`CI`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD CONSTRAINT `IDEquiposR` FOREIGN KEY (`ID_ReservaEq`) REFERENCES `reservasequipos` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
