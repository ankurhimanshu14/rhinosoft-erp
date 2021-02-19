CREATE TABLE IF NOT EXISTS partMaster
(
    partNo          INT             PRIMARY KEY         NOT NULL,
    partName        VARCHAR(100)                        NOT NULL,
    cutWeight       INT                                 NOT NULL,
    grossWeight     INT                                 NOT NULL,
    UOM_wt          VARCHAR(10)                         NOT NULL            DEFAULT     'kgs',
    grade           VARCHAR(20)                         NOT NULL,
    section         VARCHAR(10)                         NOT NULL,
    UOM_dim         VARCHAR(10)                         NOT NULL            DEFAULT     'mm'         
)
ENGINE = InnoDB;