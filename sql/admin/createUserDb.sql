CREATE TABLE IF NOT EXISTS users
(
    id          INT                     NOT NULL        PRIMARY KEY     auto_increment,
    fullName    VARCHAR(100)            NOT NULL,
    email       VARCHAR(100)            NOT NULL,
    username    VARCHAR(100)            NOT NULL        UNIQUE,
    password    LONGTEXT                NOT NULL,
    role        ENUM("Admin", "User")   NOT NULL        DEFAULT         'User',
    lastLogin   DATETIME                NOT NULL        DEFAULT          NOW(),
    ipAddress   VARCHAR(20)             NOT NULL,
    createdBy   VARCHAR(100)            NOT NULL        DEFAULT         'admin',
    createdOn   DATETIME                NOT NULL        DEFAULT         NOW(),
    modifiedBy  VARCHAR(100),
    modifiedOn  DATETIME                NOT NULL        DEFAULT         NOW(),
    FOREIGN KEY (createdBy)             REFERENCES      users(username) ON DELETE CASCADE
)
ENGINE=InnoDB;