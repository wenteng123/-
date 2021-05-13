-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2021-02-19 16:43:59
-- 服务器版本： 10.3.15
-MariaDB
-- PHP 版本： 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `ucms`
--

-- --------------------------------------------------------

--
-- 

create database stumanager;

use stumanager;


表的结构 `users`
--


CREATE TABLE `users` (
 
 `uid` mediumint(8) UNSIGNED NOT NULL primary key,
 
 `username` char(15) NOT NULL DEFAULT '',
 
 `password` char(32) NOT NULL DEFAULT '',
  
`email` varchar(40) NOT NULL DEFAULT '',
 
 `sex` char(10) NOT NULL,
  
`time` date DEFAULT NULL
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8;



--
-- 转存表中的数据 `users`
--


INSERT INTO `users` (`uid`, `username`, `password`, `email`, `sex`, `time`) 
VALUES
(1, 'xiongming', '123456', 'xda@qq.com', 'man', '2021-2-3'),

(2, 'wangwei', '123456', 'wangw@qq.com', 'man', '2021-2-3'),

(3, 'lifang', '123456', 'lifang@qq.com', 'woman', '2021-2-3'),

(4, 'zhanglan', '123456', 'zhangl@qq.com', 'woman', '2021-2-3');




--
-- 转储表的索引

--

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `uid` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
