INSERT INTO users
  (username, 
  hash
) VALUES (
  ${username}, 
  ${hash}
)
returning *;