select * 
from posts
join users on users.id = posts.user_id
where users.id = ${id};