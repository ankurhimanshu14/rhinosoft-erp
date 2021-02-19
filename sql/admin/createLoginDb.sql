CREATE TABLE IF NOT EXISTS loginDetails
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    loggedUsername VARCHAR(100) NOT NULL,
    loginStartTime TIMESTAMP,
    loginEndTime    TIMESTAMP,
    ipAddress       VARCHAR(20),
    FOREIGN KEY (loggedUsername) REFERENCES users(username) ON DELETE CASCADE
)
ENGINE=InnoDB;