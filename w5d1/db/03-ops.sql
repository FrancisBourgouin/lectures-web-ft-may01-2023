-- Basic SELECT

SELECT * FROM jokes;

-- SELECT 
--   jokes.question AS first_part, 
--   jokes.answer AS second_part 
-- FROM jokes;


-- Single WHERE clause

-- SELECT * FROM jokes WHERE rating > 4;
SELECT * FROM authors;
SELECT * FROM authors WHERE name LIKE '%a%';

SELECT * FROM authors WHERE name LIKE '%A%' OR name LIKE '%a%';
 
SELECT * FROM authors WHERE LOWER(name) LIKE '%a%'; -- SQL answer!
SELECT * FROM authors WHERE name ILIKE '%a%'; -- PostgreSQL answer!

-- Multiple WHERE clauses

SELECT * FROM authors WHERE description LIKE '%student%' AND funny = true;
SELECT * FROM authors WHERE description LIKE '%student%' OR funny = true;

-- XOR ? Exclusive OR

-- Ordering results

SELECT * FROM jokes ORDER BY rating ASC; -- IF SAME RATING, RANDOM TIME!
SELECT * FROM jokes ORDER BY rating ASC, id DESC; -- IF SAME RATING, THEN BY ID, THEN RANDOM TIME!


SELECT * FROM jokes WHERE rating > 3 ORDER BY id; -- Works!
SELECT * FROM jokes ORDER BY id WHERE rating > 3; -- Doesn't Work!
SELECT * FROM jokes ORDER BY id;

SELECT * FROM jokes LIMIT 3;
SELECT * FROM jokes LIMIT 3 OFFSET 3;

-- https://www.newegg.ca/p/pl?N=100007670%20601306869&PageSize=60
-- https://www.newegg.ca/p/pl?N=100007670%20601306869&PageSize=60&page=2

-- SELECT * FROM newegg_processors LIMIT 60 OFFSET (60 * 0) Page 1 (1-1)
-- SELECT * FROM newegg_processors LIMIT 60 OFFSET (60 * 1) Page 2 (2-1)
-- SELECT * FROM newegg_processors LIMIT 60 OFFSET (60 * 2) Page 3 (3-1)
-- SELECT * FROM newegg_processors LIMIT 60 OFFSET (60 * 3)

-- Joining tables
-- LEFT JOIN, RIGHT JOIN, INNER JOIN, OUTER JOIN, FULL JOIN

SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id;
SELECT * FROM jokes INNER JOIN authors ON authors.id = jokes.author_id;



SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id;
SELECT * FROM jokes RIGHT JOIN authors ON authors.id = jokes.author_id;
-- SELECT * FROM authors LEFT JOIN jokes ON authors.id = jokes.author_id;

SELECT * FROM jokes FULL OUTER JOIN authors ON authors.id = jokes.author_id;

-- Venn diagrams

-- SELECT * FROM jokes;


-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

SELECT * FROM jokes;

SELECT AVG(rating) FROM jokes;
SELECT author_id, AVG(rating) FROM jokes GROUP BY author_id;

SELECT authors.name, AVG(rating)
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
GROUP BY authors.name;


SELECT authors.name, COUNT(*)
FROM jokes
JOIN authors
ON authors.id = jokes.author_id
GROUP BY authors.name;


SELECT jokes.author_id
FROM jokes
GROUP BY jokes.author_id
HAVING AVG(rating) > 4.5;



-- SHOW the jokes of authors having an average of 4 and more in their jokes


-- Nested selects

SELECT * 
FROM authors 
WHERE id IN (
  SELECT jokes.author_id
  FROM jokes
  GROUP BY jokes.author_id
  HAVING AVG(rating) > 4.5
);


SELECT authors.*
FROM authors
JOIN jokes
ON authors.id = jokes.author_id
GROUP BY authors.id
HAVING AVG(rating) > 4.5;



SELECT * 
FROM jokes 
WHERE author_id IN (
  SELECT jokes.author_id
  FROM jokes
  GROUP BY jokes.author_id
  HAVING AVG(rating) > 4.5
);

-- Views (stretch)
-- Read only table (kinda)

CREATE VIEW cool_authors AS
  SELECT jokes.author_id
  FROM jokes
  GROUP BY jokes.author_id
  HAVING AVG(rating) > 4.5;


SELECT * 
FROM jokes 
JOIN cool_authors
ON cool_authors.author_id = jokes.author_id;



-- VIEW => helper functionish -- urlDatabase => getUrlsForUser
