-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 11. 11:43
-- Kiszolgáló verziója: 10.4.19-MariaDB
-- PHP verzió: 8.0.7

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
(3, 'Teszt cim 1', 'Teszt tartalom', 7, '2022-04-11 07:57:45', 1),
(4, 'Teszt cim 2', 'Ez a teszt cim', 7, '2022-04-11 08:59:45', 0);

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
(7, 'Krumplis csirke', '2022-04-11', 7);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etelek_x_hozzavalok`
--

CREATE TABLE `etelek_x_hozzavalok` (
  `id` int(11) NOT NULL,
  `etel_id` int(11) NOT NULL,
  `hozzavalo_id` int(11) NOT NULL,
  `adag_szorzo` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etelek_x_hozzavalok`
--

INSERT INTO `etelek_x_hozzavalok` (`id`, `etel_id`, `hozzavalo_id`, `adag_szorzo`) VALUES
(7, 7, 30, 0.05),
(8, 7, 17, 0.4),
(9, 7, 24, 0.5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `id` int(11) NOT NULL,
  `nev` text COLLATE utf8_hungarian_ci NOT NULL,
  `email` text COLLATE utf8_hungarian_ci NOT NULL,
  `nem` tinyint(4) DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `jogosultsag` tinyint(1) NOT NULL,
  `reg_token` text COLLATE utf8_hungarian_ci NOT NULL,
  `magassag` int(11) DEFAULT NULL,
  `cel_suly` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `nev`, `email`, `nem`, `password`, `jogosultsag`, `reg_token`, `magassag`, `cel_suly`) VALUES
(7, 'Admin', 'admin@admin.hu', 1, '$2b$10$Rk/R1QPNwgyH3H5c/OLIsug6fDghkNTbmKeANR6wdh8OUHYBN3UVy', 2, '', 180, 70),
(8, 'Moderator', 'moderator@moderator.hu', 0, '$2b$10$8lqrX.CsQpgl3OJWR82Ca.nwQfOWBTRgXu7iIWe9cZgeLzr2lmgHi', 1, '', 165, 60),
(9, 'Teszt1', 'teszt1@teszt.hu', 1, '$2b$10$RaPFAB1MIwSQzTZN.DjQ6uNdH0BkIjc7W9YKjnlUwpLj7K1LI.2qS', 0, '', 170, 70),
(10, 'Teszt2', 'teszt2@teszt.hu', 0, '$2b$10$zF3Kww.9L4qt9E0rtAQkNeutmUwS597778FGY5ODGrCue4nsUJ5s2', 0, '', NULL, NULL),
(11, 'Teszt3', 'teszt3@teszt.hu', NULL, '$2b$10$r3MN/Y1PJKhtSgJTioc5tuLlye8OOkUr30B0dXk0otwtGbAyMusly', 0, '1HHiNrr76OxTEVV3xhYpVwo7BU8jiLmw', NULL, NULL);

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
(7, 12, '2022-04-11', 7);

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
(6, 'Alma', 50, 50, 50, 50, 1),
(7, 'Körte', 50, 50, 50, 50, 1),
(8, 'Barack', 50, 50, 50, 50, 1),
(9, 'Szőlő', 50, 50, 50, 50, 1),
(10, 'Eper', 50, 50, 50, 50, 1),
(11, 'Cseresznye', 50, 50, 50, 50, 1),
(12, 'Mogyoró', 50, 50, 50, 50, 1),
(13, 'Dinnye', 50, 50, 50, 50, 1),
(14, 'Tök', 50, 50, 50, 50, 1),
(15, 'Csirkemell', 100, 100, 100, 100, 0),
(16, 'Csirke comb', 100, 100, 100, 100, 0),
(17, 'Csirke szárny', 100, 100, 100, 100, 0),
(18, 'Mahahús', 120, 120, 120, 120, 0),
(19, 'Disznóhús', 130, 130, 130, 130, 0),
(20, 'Só', 10, 0, 0, 0, 1),
(21, 'Cukor', 20, 0, 0, 0, 1),
(22, 'Répa', 40, 0, 40, 0, 1),
(23, 'Brokkoli', 40, 0, 40, 0, 1),
(24, 'Krumpli', 40, 0, 40, 0, 1),
(25, 'Uborka', 40, 0, 40, 0, 1),
(26, 'Vörös hagyma', 40, 0, 40, 0, 1),
(27, 'Lila hagyma', 45, 0, 40, 0, 1),
(28, 'Margarin', 20, 20, 20, 20, 0),
(29, 'Májkrém', 20, 20, 20, 20, 0),
(30, 'Tej', 5, 5, 5, 5, 0),
(31, 'Nutella', 30, 30, 0, 30, 1),
(32, 'Fehér kenyér', 20, 20, 20, 20, 1),
(33, 'Barna kenyér', 20, 20, 20, 15, 1),
(34, 'Jégkrém', 36, 36, 5, 36, 1);

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
(3, 7, '2022-04-11', 25);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `testsulyok`
--

CREATE TABLE `testsulyok` (
  `id` int(11) NOT NULL,
  `suly` double NOT NULL,
  `datum` date NOT NULL,
  `felhasznalo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `testsulyok`
--

INSERT INTO `testsulyok` (`id`, `suly`, `datum`, `felhasznalo_id`) VALUES
(3, 80, '2022-04-11', 7);

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
  ADD PRIMARY KEY (`id`),
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
-- A tábla indexei `testsulyok`
--
ALTER TABLE `testsulyok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `blogok`
--
ALTER TABLE `blogok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `etelek`
--
ALTER TABLE `etelek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `etelek_x_hozzavalok`
--
ALTER TABLE `etelek_x_hozzavalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `hozzavalok`
--
ALTER TABLE `hozzavalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT a táblához `testmozgasok`
--
ALTER TABLE `testmozgasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `testsulyok`
--
ALTER TABLE `testsulyok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `blogok`
--
ALTER TABLE `blogok`
  ADD CONSTRAINT `blogok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `etelek`
--
ALTER TABLE `etelek`
  ADD CONSTRAINT `etelek_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `etelek_x_hozzavalok`
--
ALTER TABLE `etelek_x_hozzavalok`
  ADD CONSTRAINT `etelek_x_hozzavalok_ibfk_1` FOREIGN KEY (`etel_id`) REFERENCES `etelek` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `etelek_x_hozzavalok_ibfk_2` FOREIGN KEY (`hozzavalo_id`) REFERENCES `hozzavalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  ADD CONSTRAINT `folyadek_bevitel_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `testmozgasok`
--
ALTER TABLE `testmozgasok`
  ADD CONSTRAINT `testmozgasok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `testsulyok`
--
ALTER TABLE `testsulyok`
  ADD CONSTRAINT `testsulyok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
