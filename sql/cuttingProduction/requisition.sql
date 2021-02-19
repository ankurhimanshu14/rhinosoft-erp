CREATE TABLE IF NOT EXISTS steel_part_approvals
(
    id              INT             NOT NULL        PRIMARY KEY     AUTO_INCREMENT,
    partNo          INT             NOT NULL,
    grade           VARCHAR(20)     NOT NULL,
    section         VARCHAR(20)     NOT NULL,
    cutWeight       INT             NOT NULL,
    heatNo          VARCHAR(20)     NOT NULL,
    heatCode        VARCHAR(20)     NOT NULL,
    machine         VARCHAR(50)     NOT NULL,
    plannedQty      INT             NOT NULL,
    actualQty       INT,
    UOM_qty         VARCHAR(10)     NOT NULL        DEFAULT         "Nos",
    totalWeight     INT,
    UOM_wt          VARCHAR(10)     NOT NULL        DEFAULT         "kgs",
    plannedDate     DATETIME        NOT NULL        DEFAULT         NOW(),
    completeDate    DATETIME,
    createdBy       VARCHAR(50),
    FOREIGN KEY     (partNo, cutWeight)        REFERENCES      partMaster(partNo, cutWeight)      ON DELETE CASCADE,
    FOREIGN KEY     (heatNo, heatCode)         REFERENCES      grnEntry(heatNo, heatCode)         ON DELETE CASCADE
)
ENGINE = InnoDB;