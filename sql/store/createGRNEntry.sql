CREATE TABLE IF NOT EXISTS grnEntry
(   
    grNo            BIGINT          NOT NULL        PRIMARY KEY     AUTO_INCREMENT,
    challanNo       BIGINT          NOT NULL,
    challanDate     TIMESTAMP       NOT NULL,
    partyCode       VARCHAR(5)      NOT NULL,
    vehicleNo       VARCHAR(15)     NOT NULL,
    itemCode        VARCHAR(10)     NOT NULL,
    itemDescription VARCHAR(100)    NOT NULL,
    heatNo          VARCHAR(20)     NOT NULL,
    heatCode        VARCHAR(10),
    receivedQty     BIGINT          NOT NULL,
    issuedQty       BIGINT          NOT NULL        DEFAULT         0,
    availableQty    BIGINT,
    UOM             VARCHAR(20)     NOT NULL,
    createdBy       VARCHAR(100),
    createdOn       DATETIME        NOT NULL        DEFAULT         NOW(),
    modifiedBy      VARCHAR(100),
    modifiedOn      DATETIME        NOT NULL        DEFAULT         NOW(),
    PRIMARY KEY (grNo),
    INDEX  (heatNo)
)
ENGINE=InnoDB;