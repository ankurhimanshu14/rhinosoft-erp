SET @queryVar := VALUE; 
SELECT password FROM USERS WHERE @queryVar = ?;