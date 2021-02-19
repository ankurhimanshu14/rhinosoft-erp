CREATE TABLE IF NOT EXISTS approvedComponents AS
    SELECT grnEntry.heatNo, partMaster.partNo
    FROM
        grnEntry LEFT JOIN
        partMaster
        ON 1 = 0;

INSERT INTO approvedComponents
    SELECT grnEntry.heatNo, partMaster.partNo
    FROM
        partMaster LEFT JOIN
        grnEntry
        ON 1 = 0;