-- ./server/db/init.sql

CREATE DATABASE users;

  CREATE TABLE IF NOT EXISTS users (
    _id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

