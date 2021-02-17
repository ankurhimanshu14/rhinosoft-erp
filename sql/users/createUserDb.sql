CREATE TABLE IF NOT EXISTS users
(
    id          INT             NOT NULL        PRIMARY KEY     auto_increment,
    fullName    VARCHAR(100)    NOT NULL,
    email       VARCHAR(100)    NOT NULL        UNIQUE,
    username    VARCHAR(100)    NOT NULL        UNIQUE,
    password    LONGTEXT        NOT NULL,
    createdBy   VARCHAR(100)    NOT NULL        DEFAULT         'admin',
    createdOn   DATETIME        NOT NULL        DEFAULT         NOW(),
    modifiedBy  VARCHAR(100),
    modifiedOn  DATETIME        NOT NULL        DEFAULT         NOW(),
    FOREIGN KEY (createdBy)     REFERENCES      users(username) ON DELETE       CASCADE
) ENGINE=InnoDB;