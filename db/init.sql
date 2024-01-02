-- ./server/db/init.sql


CREATE DATABASE project_games;

  CREATE TABLE IF NOT EXISTS users (
    _id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
  );

