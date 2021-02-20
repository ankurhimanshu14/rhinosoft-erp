CREATE TABLE IF NOT EXISTS approvedComponents
(   
    id              INT                             NOT NULL        PRIMARY KEY            AUTO_INCREMENT,
    heatNo          VARCHAR(20)                     NOT NULL,
    heatCode        VARCHAR(10),
    approvals       VARCHAR(1000),
    availableQty    INT                             NOT NULL,
    CONSTRAINT      'approvedComponents_ibfk_1'     FOREIGN KEY     (heatNo)            REFERENCES      grnEntry(heatNo)        ON DELETE CASCADE
)
ENGINE = InnoDB;