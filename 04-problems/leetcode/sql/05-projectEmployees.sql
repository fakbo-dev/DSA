select
  p.project_id,
  ROUND(AVG(CAST(experience_years AS DECIMAL(10, 2))), 2) as average_years
from
  Project AS P
  inner join Employee as E ON P.employee_id = E.employee_id
group by
  p.project_id
