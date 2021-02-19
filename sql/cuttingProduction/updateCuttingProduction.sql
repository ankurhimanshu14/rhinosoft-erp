UPDATE requisition
    SET totalWeight = cutWeight * availableQty
    SET completeDate = NOW();