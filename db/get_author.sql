select * from authors
join authorsbooks on authorsbooks.book_id = authors.id
join books on authorsbooks.author_id = books.id
where authors.id = ${1};