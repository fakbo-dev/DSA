WITH skuValles AS (
SELECT 
    valles.Producto as sku,
    prod.c_descri as Descripcion,
    prod.n_activo as Activo
    FROM Ecommerce.dbo.Sucursal0003 as valles
left join
    [172.19.2.226].vad10.dbo.ma_productos as prod
    ON valles.Producto = prod.c_codigo COLLATE SQL_Latin1_General_CP1_CI_AS
),
skuTrinidad AS (
    SELECT *
    FROM Ecommerce.dbo.Sucursal0003
)
