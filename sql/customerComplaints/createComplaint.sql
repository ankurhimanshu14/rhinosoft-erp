CREATE TABLE IF NOT EXISTS customerComplaint
(
    id                      INT             PRIMARY KEY     AUTO_INCREMENT,
    dateOfComplaint         DATE            NOT NULL        DEFAULT             NOW(),
    partNo                  VARCHAR(10)     NOT NULL,
    partName                VARCHAR(50)     NOT NULL,
    lotNo                   VARCHAR(15)     NOT NULL,
    quantity                INT             NOT NULL,
    problemDescription      VARCHAR(255)    NOT NULL,
    correction              VARCHAR(255),
    correctionDate          DATE,
    rootCauseAnalysis       VARCHAR(1000),
    correctiveActions       VARCHAR(1000),
    correctiveActionsDate   DATE
) ENGINE = InnoDB;