with
  test as (
    select
      sig.user_id,
      SUM(
        CASE
          WHEN conf.action = 'confirmed' THEN 1
          ELSE 0
        end
      ) as confirmed,
      COUNT(sig.user_id) as request
    from
      Signups as sig
      LEFT join Confirmations as conf on sig.user_id = conf.user_id
    group by
      sig.user_id
  )
select
  user_id,
  ROUND(
    CAST(confirmed as FLOAT) / CAST(request as FLOAT),
    2
  ) as confirmation_rate
from
  test
order by
  user_id DESC
