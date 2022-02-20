-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Feb 20. 13:42
-- Kiszolgáló verziója: 10.4.20-MariaDB
-- PHP verzió: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `codey_health`
--
CREATE DATABASE IF NOT EXISTS `codey_health` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `codey_health`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `blogok`
--

CREATE TABLE `blogok` (
  `id` int(11) NOT NULL,
  `cim` text COLLATE utf8_hungarian_ci NOT NULL,
  `tartalom` text COLLATE utf8_hungarian_ci NOT NULL,
  `felhasznalo_id` int(11) NOT NULL,
  `idopont` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `blogok`
--

INSERT INTO `blogok` (`id`, `cim`, `tartalom`, `felhasznalo_id`, `idopont`, `status`) VALUES
(1, 'Ez a cim', 'ghuzfgrugruzgrufzg eugtrutgeurtg zgrtuegtu', 2, '2022-02-20 13:36:45', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etelek`
--

CREATE TABLE `etelek` (
  `id` int(11) NOT NULL,
  `nev` text COLLATE utf8_hungarian_ci NOT NULL,
  `hozzadva` date NOT NULL DEFAULT current_timestamp(),
  `felhasznalo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etelek`
--

INSERT INTO `etelek` (`id`, `nev`, `hozzadva`, `felhasznalo_id`) VALUES
(1, 'Alma', '2022-02-14', 1),
(2, 'Krumpripaprikás', '2022-02-14', 1),
(3, 'Bableves', '2022-02-16', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etelek_x_hozzavalok`
--

CREATE TABLE `etelek_x_hozzavalok` (
  `etel_id` int(11) NOT NULL,
  `hozzavalo_id` int(11) NOT NULL,
  `adag_szorzo` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etelek_x_hozzavalok`
--

INSERT INTO `etelek_x_hozzavalok` (`etel_id`, `hozzavalo_id`, `adag_szorzo`) VALUES
(1, 1, 1),
(2, 2, 1),
(2, 3, 1),
(3, 2, 0.1),
(3, 3, 1.5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `id` int(11) NOT NULL,
  `nev` text COLLATE utf8_hungarian_ci NOT NULL,
  `email` text COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `jogosultsag` tinyint(1) NOT NULL,
  `reg_token` text COLLATE utf8_hungarian_ci NOT NULL,
  `magassag` int(11) DEFAULT NULL,
  `suly` double DEFAULT NULL,
  `cel_suly` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `nev`, `email`, `password`, `jogosultsag`, `reg_token`, `magassag`, `suly`, `cel_suly`) VALUES
(1, 'gilianerik1107@gmail.com', 'gilianerik1107@gmail.com', '$2b$10$ljYf4KnGRJe7eGjdgN8GYOuWZWG0p.qbXlapM96bxZXeXZdw54JWq', 2, '', NULL, NULL, NULL),
(2, 'teszt1@teszt.hu', 'teszt1@teszt.hu', '$2b$10$abFb0S8sJ7nn.Kio6MMsIeXQ9sZGp7utkdT0ue8kqHjfthZLDqzxq', 0, '', NULL, NULL, NULL),
(3, 'teszt2@teszt.hu', 'teszt2@teszt.hu', '$2b$10$95C1qTyo926.05bDcg/MC.cpLPs2nf.TCmzAWHGF38.WvK64JzaZu', 0, '', NULL, NULL, NULL),
(4, 'teszt3@teszt.hu', 'teszt3@teszt.hu', '$2b$10$Or5Xk8cL.k1YE2.IJel8uOgfDnmzoXBjRn6ZU6URUIn/SoJUOJPUO', 0, '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `folyadek_bevitel`
--

CREATE TABLE `folyadek_bevitel` (
  `id` int(11) NOT NULL,
  `mennyiseg` double NOT NULL,
  `datum` date NOT NULL DEFAULT current_timestamp(),
  `felhasznalo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `folyadek_bevitel`
--

INSERT INTO `folyadek_bevitel` (`id`, `mennyiseg`, `datum`, `felhasznalo_id`) VALUES
(2, 13, '2022-02-15', 1),
(3, 45, '2022-02-14', 1),
(4, 3000, '2022-02-13', 1),
(5, 90, '2022-02-16', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hozzavalok`
--

CREATE TABLE `hozzavalok` (
  `id` int(11) NOT NULL,
  `nev` text COLLATE utf8_hungarian_ci NOT NULL,
  `kcal` int(11) NOT NULL,
  `feherje` double NOT NULL,
  `szenhidrat` double NOT NULL,
  `zsir` double NOT NULL,
  `ehetoe_magaban` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `hozzavalok`
--

INSERT INTO `hozzavalok` (`id`, `nev`, `kcal`, `feherje`, `szenhidrat`, `zsir`, `ehetoe_magaban`) VALUES
(1, 'Alma', 123, 123, 123, 123, 1),
(2, 'Krumpli', 100, 100, 100, 100, 0),
(3, 'Paprika', 100, 100, 100, 100, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `testmozgasok`
--

CREATE TABLE `testmozgasok` (
  `id` int(11) NOT NULL,
  `felhasznalo_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `mennyiseg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `testmozgasok`
--

INSERT INTO `testmozgasok` (`id`, `felhasznalo_id`, `datum`, `mennyiseg`) VALUES
(1, 1, '2022-02-15', 3000);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `blogok`
--
ALTER TABLE `blogok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A tábla indexei `etelek`
--
ALTER TABLE `etelek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A tábla indexei `etelek_x_hozzavalok`
--
ALTER TABLE `etelek_x_hozzavalok`
  ADD KEY `etel_id` (`etel_id`),
  ADD KEY `hozzavalo_id` (`hozzavalo_id`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- A tábla indexei `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A tábla indexei `hozzavalok`
--
ALTER TABLE `hozzavalok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `testmozgasok`
--
ALTER TABLE `testmozgasok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`,`felhasznalo_id`),
  ADD KEY `testmozgasok_ibfk_1` (`felhasznalo_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `blogok`
--
ALTER TABLE `blogok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `etelek`
--
ALTER TABLE `etelek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `hozzavalok`
--
ALTER TABLE `hozzavalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `testmozgasok`
--
ALTER TABLE `testmozgasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `blogok`
--
ALTER TABLE `blogok`
  ADD CONSTRAINT `blogok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `etelek`
--
ALTER TABLE `etelek`
  ADD CONSTRAINT `etelek_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `etelek_x_hozzavalok`
--
ALTER TABLE `etelek_x_hozzavalok`
  ADD CONSTRAINT `etelek_x_hozzavalok_ibfk_1` FOREIGN KEY (`etel_id`) REFERENCES `etelek` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `etelek_x_hozzavalok_ibfk_2` FOREIGN KEY (`hozzavalo_id`) REFERENCES `hozzavalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  ADD CONSTRAINT `folyadek_bevitel_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `testmozgasok`
--
ALTER TABLE `testmozgasok`
  ADD CONSTRAINT `testmozgasok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
