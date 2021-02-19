CREATE TABLE IF NOT EXISTS partMaster
(
    id              INT                                 AUTO_INCREMENT,
    partNo          INT             PRIMARY KEY         NOT NULL,
    partName        VARCHAR(100)                        NOT NULL,
    cutWeight       INT                                 NOT NULL,
    grossWeight     INT                                 NOT NULL,
    UOM_wt          VARCHAR(10)                         NOT NULL,
    grade           VARCHAR(20)                         NOT NULL,
    section         VARCHAR(10)                         NOT NULL,
    UOM_dim         VARCHAR(10)                         NOT NULL         
)
ENGINE = InnoDB;