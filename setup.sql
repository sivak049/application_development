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
