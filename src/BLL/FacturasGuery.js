export const querys = {
    getAllProducts: "SELECT TOP(500) * FROM [prueba].[dbo].[facturas]",
    getProducById: "SELECT * FROM Facturas Where Id = @Id",
    addNewProduct:
      "INSERT INTO [webstore].[dbo].[facturas] (name, description, quantity) VALUES (@name,@description);",
    deleteProduct: "DELETE FROM [webstore].[dbo].[Factura] WHERE Id= @Id",
    getTotalProducts: "SELECT COUNT(*) FROM prueba.dbo.factura",
    updateProductById:
      "UPDATE [webstore].[dbo].[factura] SET Name = @name, Description = @description, WHERE Id = @id",
  };