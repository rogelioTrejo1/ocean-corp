-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-05-2019 a las 03:33:57
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Ocean_Corp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Clientes`
--

CREATE TABLE `Clientes` (
  `ID_Cliente` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Apellido_Paterno` varchar(20) NOT NULL,
  `Apellido_Materno` varchar(20) NOT NULL,
  `Foto_Perfil` text NOT NULL,
  `Nombre_Usuario` varchar(50) NOT NULL,
  `Contraseña` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Clientes`
--

INSERT INTO `Clientes` (`ID_Cliente`, `Nombre`, `Apellido_Paterno`, `Apellido_Materno`, `Foto_Perfil`, `Nombre_Usuario`, `Contraseña`) VALUES
(35, 'Rogelio', 'Trejo', 'Estrada', 'image/uploads/1557974812199.jpg', 'jonex720', 'matematicas_123'),
(36, 'Jesus Alberto', 'Damasco', 'Lopez', 'image/uploads/1558315475487.jpg', 'Admin123', '1234'),
(37, 'Maria', 'Trejo', 'Estrada', 'image/uploads/1558011904494.jpg', 'Mary0411', 'rodolfo0411'),
(38, 'Veronica', 'Estrada', 'Rodriguez', 'image/uploads/1558042666459.jpg', 'VeroPollito', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Datos_Clientes`
--

CREATE TABLE `Datos_Clientes` (
  `ID_Registro` int(11) NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  `Calle` varchar(30) NOT NULL,
  `No_Interno` int(11) NOT NULL,
  `No_Externo` int(11) NOT NULL,
  `Fraccionamiento` varchar(150) NOT NULL,
  `Codigo_Postal` int(11) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Ayuda` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Datos_Clientes`
--

INSERT INTO `Datos_Clientes` (`ID_Registro`, `ID_Cliente`, `Calle`, `No_Interno`, `No_Externo`, `Fraccionamiento`, `Codigo_Postal`, `Telefono`, `Email`, `Ayuda`) VALUES
(23, 35, 'Gapar de la fuente', 0, 317, 'Villas de Nuestra Señora de la Asuncion', 20126, '4492316585', 'jonex720@gmail.com', 'Me encuentro a 2 calles de 3er aniño!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pedidos`
--

CREATE TABLE `Pedidos` (
  `ID_Pedido` int(11) NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  `Envio_Domicilio` tinyint(1) DEFAULT '0',
  `Tipo_Pago` varchar(30) NOT NULL,
  `Fecha_Realizado` date NOT NULL,
  `Fecha_Entrega` date NOT NULL,
  `Especificaciones` text NOT NULL,
  `Entregado` tinyint(1) DEFAULT '0',
  `Total_Pagar` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pedidos_Productos`
--

CREATE TABLE `Pedidos_Productos` (
  `ID_Pedido_Producto` int(11) NOT NULL,
  `ID_Pedido` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--

CREATE TABLE `Productos` (
  `ID_Producto` int(11) NOT NULL,
  `Producto` varchar(30) NOT NULL,
  `Categoria` varchar(20) NOT NULL,
  `Descriptcion` text NOT NULL,
  `Precio` float NOT NULL,
  `Imagen` text NOT NULL,
  `Disponibilidad` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Productos`
--

INSERT INTO `Productos` (`ID_Producto`, `Producto`, `Categoria`, `Descriptcion`, `Precio`, `Imagen`, `Disponibilidad`) VALUES
(11, 'Halo Reach', 'Poster', 'Poster de halo donde se mustra el juego', 50.5, 'https://http2.mlstatic.com/D_NP_842118-MLM27331500958_052018-Q.jpg', 1),
(12, 'Equipo Azul', 'Poster', 'Poster de halo donde se mustra el equipo azul', 55.5, 'https://content.halocdn.com/media/Default/games/halo-3/Page/game_overview_thumbnail_halo3-825be4767fb34192af8d5529e444a97e.jpg\r\n', 1),
(13, 'BTS', 'Taza', 'Taza mostrando al grupo coreano llamado BTS', 59.99, 'https://http2.mlstatic.com/tazas-D_NP_881407-MLA27099395360_032018-Q.jpg', 1),
(14, 'Toradora', 'Almoada', 'ALmoada del amine de Toradora', 80.75, 'https://images-na.ssl-images-amazon.com/images/I/51918mnuibL._SX425_.jpg', 1),
(15, 'Bolografo empresarial', 'Pluma', 'Bolografo para tu empresa', 19.99, 'https://images-na.ssl-images-amazon.com/images/I/51uCCZCwq8L._SX425_.jpg', 1),
(16, 'Agenda 2019 \"Dragon Ball Super', 'Agenda', 'Agendal 2019 con diseño del anime popular Dragon Ball Super', 60, 'https://http2.mlstatic.com/agenda-dragon-ball-z-88990-D_NQ_NP_253115-MLB25200511989_122016-F.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos_Favoritos`
--

CREATE TABLE `Productos_Favoritos` (
  `ID_Product_Favorito` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  `Fecha_Insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Productos_Favoritos`
--

INSERT INTO `Productos_Favoritos` (`ID_Product_Favorito`, `ID_Producto`, `ID_Cliente`, `Fecha_Insert`) VALUES
(16, 11, 35, '2019-05-20 01:15:40'),
(17, 13, 35, '2019-05-20 01:18:13'),
(19, 11, 36, '2019-05-20 01:27:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('3vbD1w_fVriVfkJDf1i6zvXXD0NVP7Pp', 1558401337, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('4dZiubUGtdJ7FDxuqW0nxQLldqpLMLZw', 1558398257, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('5W2oPJbDetvjnK0igeTZWsTRX8Y7BThY', 1558401491, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('5zSd6Td7qX3tCcZz_ueb17uT3pGKGuy0', 1558398082, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('CNdA8dbcs0XdZ9UJZs8dCb4ubkCOm7Cp', 1558374487, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('EOEm2d7QrzViUeKcTbwn3bxLvoV9v1go', 1558397814, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('FMnz4C_eha8v1l4qvbzv1BIyAzx5ZFPz', 1558398027, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('IWNWOaVr9Z8EnMR3mDskWivACbKXS1UG', 1558398934, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('JPPEIaYU4Ze5ijKTSPOaYT7nThWv82Hw', 1558374463, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('MMivuXBbkQlFNj5gRlkK58L2dQSb72d6', 1558402082, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":36}}'),
('RXH_xuF9Q2hD4vsEosccvXPchKEbyiFS', 1558401876, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('Y8TuRRATRZ9XzvtwiCLstBVQ3oYO-rXD', 1558313515, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('fDhAcbBPhs7jF2UxHJI8C46WkGufwDns', 1558314051, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('iORtwmsKdAYghjAAQoFjFK-Vn8VjrFga', 1558397686, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('j7KzfEyXWjAsP7zVKOb-dD_sGfkMu7ct', 1558323126, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":35}}'),
('kseN1lyIgmeFHdJh-WSDFI_Xw_0lP8Di', 1558397866, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('ove0sGfG6JzJBYaxgPCBDc1pb2jxxguM', 1558398245, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('pbdtk90YULGmJc8c4APgC6gXxTv6tU9k', 1558402007, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('pi-x2ZHSIoeNxcYyvdQ5Iow_OwaRKojO', 1558398741, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('qGQ3iMQ09nHbkFbcGIjUiJ4CisF2OcUj', 1558398153, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('tcPX8MkCRzhxV1h9CvOkOJBN1FfMn8Sl', 1558398125, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('tqf_J20aOau9GjOv2KiNhMcfymVuinat', 1558397215, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('y7LxcIFScEzASWaoK5wfjUaKKjKt5mtV', 1558402018, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('yDJa0upUd17Ewr6H9idweKZ7Bhe_L7SI', 1558375544, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":35}}'),
('zsNGzLfUL5ze2upgDoKixDCuWn6bSXGv', 1558398817, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Clientes`
--
ALTER TABLE `Clientes`
  ADD PRIMARY KEY (`ID_Cliente`);

--
-- Indices de la tabla `Datos_Clientes`
--
ALTER TABLE `Datos_Clientes`
  ADD PRIMARY KEY (`ID_Registro`),
  ADD KEY `ID_Cliente` (`ID_Cliente`);

--
-- Indices de la tabla `Pedidos`
--
ALTER TABLE `Pedidos`
  ADD PRIMARY KEY (`ID_Pedido`),
  ADD KEY `ID_Cliente` (`ID_Cliente`);

--
-- Indices de la tabla `Pedidos_Productos`
--
ALTER TABLE `Pedidos_Productos`
  ADD PRIMARY KEY (`ID_Pedido_Producto`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `ID_Pedido` (`ID_Pedido`);

--
-- Indices de la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`ID_Producto`);

--
-- Indices de la tabla `Productos_Favoritos`
--
ALTER TABLE `Productos_Favoritos`
  ADD PRIMARY KEY (`ID_Product_Favorito`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `ID_Cliente` (`ID_Cliente`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Clientes`
--
ALTER TABLE `Clientes`
  MODIFY `ID_Cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `Datos_Clientes`
--
ALTER TABLE `Datos_Clientes`
  MODIFY `ID_Registro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `Pedidos`
--
ALTER TABLE `Pedidos`
  MODIFY `ID_Pedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Pedidos_Productos`
--
ALTER TABLE `Pedidos_Productos`
  MODIFY `ID_Pedido_Producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Productos`
--
ALTER TABLE `Productos`
  MODIFY `ID_Producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `Productos_Favoritos`
--
ALTER TABLE `Productos_Favoritos`
  MODIFY `ID_Product_Favorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Datos_Clientes`
--
ALTER TABLE `Datos_Clientes`
  ADD CONSTRAINT `Datos_Clientes_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `Clientes` (`ID_Cliente`);

--
-- Filtros para la tabla `Pedidos`
--
ALTER TABLE `Pedidos`
  ADD CONSTRAINT `Pedidos_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `Clientes` (`ID_Cliente`);

--
-- Filtros para la tabla `Pedidos_Productos`
--
ALTER TABLE `Pedidos_Productos`
  ADD CONSTRAINT `Pedidos_Productos_ibfk_1` FOREIGN KEY (`ID_Pedido`) REFERENCES `Pedidos` (`ID_Pedido`),
  ADD CONSTRAINT `Pedidos_Productos_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `Productos` (`ID_Producto`);

--
-- Filtros para la tabla `Productos_Favoritos`
--
ALTER TABLE `Productos_Favoritos`
  ADD CONSTRAINT `Productos_Favoritos_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `Clientes` (`ID_Cliente`),
  ADD CONSTRAINT `Productos_Favoritos_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `Productos` (`ID_Producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
