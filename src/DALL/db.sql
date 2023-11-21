SELECT TOP(500) * FROM [prueba].[dbo].[facturas];

INSERT DATA
INSERT INTO [prueba].[dbo].[facturas] (name) VALUES('product2');

SELECT SCOPE_IDENTITY()

SELECT COUNT(*) FROM prueba.dbo.facturas;

CREATE DATABASE pruebas;

 SELECT USER_NAME();