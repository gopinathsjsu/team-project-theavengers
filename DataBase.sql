create database hotelBooking
use hotelBooking;

CREATE TABLE Users (
    UserID int auto_increment,
    LastName varchar(255),
    FirstName varchar(255),
    Gender varchar(25),
    Address varchar(255),
    City varchar(255),
    State varchar(255),
    Country varchar(255),
    ZipCode varchar(255),
    emailID varchar(255),
    pass varchar(255),
    last_login datetime,
    primary key(UserID)
);