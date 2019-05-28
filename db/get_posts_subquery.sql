select post
from posts
where user_id in (select id from users where id = ${id});