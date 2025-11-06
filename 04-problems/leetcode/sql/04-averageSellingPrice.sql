SELECT
  pri.product_id,
  ROUND(SUM(CAST(uni.units AS FLOAT) * CAST(pri.price as FLOAT) / SUM(CAST(uni.units as FLOAT), 2) as average_price
FROM
  Prices as pri
  LEFT JOIN UnitsSold uni ON pri.product_id = uni.product_id
  AND uni.purchase_date BETWEEN pri.start_date AND pri.end_date
GROUP BY
  pri.product_id;
