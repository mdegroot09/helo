select * from books
join authorsbooks on authorsbooks.book_id = books.id
join authors on authorsbooks.author_id = authors.id
where books.id = ${1};