CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  googleId VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  expiresAt TIMESTAMP NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE timeCapsules (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  capsuleName VARCHAR(255) NOT NULL
  recipientName VARCHAR(255) NOT NULL,
  recipientPhone VARCHAR(15),
  dueDate TIMESTAMP NOT NULL,
  inputText VARCHAR(255),
  accessCode VARCHAR(255) NOT NULL, 
  status VARCHAR(255) DEFAULT 'pending';
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE timeCapsuleFiles (
  id SERIAL PRIMARY KEY,
  timeCapsuleId INT NOT NULL,
  accessCode VARCHAR(255) NOT NULL, 
  filesArray TEXT[] NOT NULL,
  FOREIGN KEY (timeCapsuleId) REFERENCES timeCapsules(id)
);
