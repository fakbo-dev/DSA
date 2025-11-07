select
  *
from
  Users as u
  inner join Register as r on u.user_id = r.user_id
