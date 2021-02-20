INSERT INTO approvedComponents(heatNo, heatCode, availableQty)
SELECT DISTINCT heatNo, heatCode, availableQty FROM grnEntry;