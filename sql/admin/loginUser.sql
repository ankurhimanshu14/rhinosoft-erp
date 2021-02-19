CREATE DATABASE IF NOT EXISTS `mws_database` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mws_database`;

SELECT
password FROM USERS
WHERE
username = ?;