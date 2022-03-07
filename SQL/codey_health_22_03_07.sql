-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Már 07. 13:13
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

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
(1, 'Alma', '2022-03-03', 1),
(2, 'Krumpripaprikás', '2022-03-03', 1),
(3, 'Bableves', '2022-02-28', 1),
(6, 'Paprika', '2022-03-01', 1);

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
(1, 1, 1, 2.3),
(2, 2, 2, 3),
(3, 2, 3, 1),
(4, 3, 2, 0.1),
(5, 3, 3, 1.5),
(6, 6, 3, 1);

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
(1, 'gilianerik1107@gmail.com', 'gilianerik1107@gmail.com', NULL, '$2b$10$ljYf4KnGRJe7eGjdgN8GYOuWZWG0p.qbXlapM96bxZXeXZdw54JWq', 2, '', NULL, 50),
(2, 'kagi', 'teszt1@teszt.hu', NULL, '$2b$10$QWVHcrKnqnWiU6ojwTPgSed03IXlYKctuSrC5H5WwsT9f5l7H2k12', 0, '', NULL, NULL),
(3, 'teszt2@teszt.hu', 'teszt2@teszt.hu', NULL, '$2b$10$95C1qTyo926.05bDcg/MC.cpLPs2nf.TCmzAWHGF38.WvK64JzaZu', 0, '', NULL, NULL),
(4, 'teszt3@teszt.hu', 'teszt3@teszt.hu', NULL, '$2b$10$Or5Xk8cL.k1YE2.IJel8uOgfDnmzoXBjRn6ZU6URUIn/SoJUOJPUO', 0, '', NULL, NULL),
(6, 'bekagi', 'asd@asd.asd', NULL, '$2b$10$NDkJlaj/KNcdfaE8lCDmyOdzXZU9t4Z5BojRVAPiQ.SE/a5LU5sAm', 0, 'yf9RNreZBX0vjeZAjcAR4r8g3JVYqaEy', NULL, NULL);

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
(2, 'Krumpli', 75, 100, 100, 100, 0),
(3, 'Paprika', 100, 100, 100, 100, 1),
(5, 'Borsó', 555, 555, 555, 555, 0);

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
(1, 100, '2022-03-03', 1),
(2, 90, '2022-03-04', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `etelek`
--
ALTER TABLE `etelek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `etelek_x_hozzavalok`
--
ALTER TABLE `etelek_x_hozzavalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `folyadek_bevitel`
--
ALTER TABLE `folyadek_bevitel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `hozzavalok`
--
ALTER TABLE `hozzavalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `testmozgasok`
--
ALTER TABLE `testmozgasok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `testsulyok`
--
ALTER TABLE `testsulyok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `testsulyok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
