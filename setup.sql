-- Create the database if it doesn't exist
CREATE DATABASE my_app;

-- Connect to the database
\c my_app;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255)
);

-- Insert dummy data
INSERT INTO users (username, profile_picture) VALUES 
('johndoe', '/images/johndoe.png'),
('janedoe', '/images/janedoe.png');
