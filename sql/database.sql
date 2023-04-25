create database if not exists urlcollection;
use urlcollection;

drop table if exists Categories;
drop table if exists URLs;
drop table if exists Users;

create table Users
(
    id int primary key auto_increment,
    username varchar(50) unique not null,
    password varchar(50) not null
);

create table Categories
(
    id int primary key auto_increment,
    name varchar(50) not null
);

create table URLs
(
    id int primary key auto_increment,
    url longtext not null,
    description longtext not null,
    category int
);

alter table URLs add foreign key (category) references URLs(id);