## SQL Exercises

<br>

- 📖 Mostre o título e o nome do gênero de todas as séries.

```sql
SELECT s.title, g.name 
FROM series s, genres g 
WHERE s.genre_id = g.id;
```

<br>

- 📖 Mostre o título dos episódios, os nomes e sobrenomes dos atores que atuam em cada um deles.

```sql
SELECT ep.title, act.first_name, act.last_name 
FROM episodes ep, actors act, actor_episode act_ep
WHERE ep.id = act_ep.episode_id
AND act.id = act_ep.actor_id
ORDER BY ep.title;
```

<br>

- 📖 Mostre o título de todas as séries e o número total de temporadas que cada uma delas possui.

```sql
SELECT se.title, COUNT(seas.title) as "Quantidade de Temporadas"
FROM series se, seasons seas 
WHERE se.id = seas.serie_id
GROUP BY se.title;
```

<br>

- 📖 Mostre o nome de todos os gêneros e o número total de filmes de cada um, desde que seja maior ou igual a 3.

```sql
SELECT ge.name, COUNT(mo.*) as "Total de filmes" 
FROM genres ge, movies mo
WHERE ge.id = mo.genre_id
GROUP BY ge.name
HAVING COUNT(mo.*) >= 3;
```

<br>

- 📖 Mostre apenas o nome e o sobrenome dos atores que atuam em todos os filmes Guerra nas Estrelas e que estes não se repitam.

```sql
SELECT DISTINCT act.first_name, act.last_name, COUNT(mov.title) as "Filmes atuados"
FROM actors act, movies mov, actor_movie act_mov
WHERE mov.title LIKE '%Guerra nas Estrelas%'
AND mov.id = act_mov.movie_id
AND act.id = act_mov.actor_id
GROUP BY act.first_name, act.last_name;
```

- 📖 Adicione um filme à tabela de filmes.

```sql
INSERT INTO movies(created_at, updated_at, title, rating, awards, release_date, length,	genre_id) 
VALUES(null, null, 'Homem-Aranha: Sem Volta para Casa', 9.2, 1, '2021-12-16', 137, 8);
```

<br>

- 📖 Adicione um gênero à tabela de gêneros.

```sql
INSERT INTO genres(created_at, updated_at, name, ranking, active)
VALUES(CURRENT_TIMESTAMP, null, 'Romance', 13, 1);
```

<br>

- 📖 Associe o filme do Ex 2. ao gênero criado no Ex. 3.

```sql
UPDATE movies 
SET genre_id = 13 
WHERE id = 22;
```

<br>

- 📖 Modifique a tabela de atores para que pelo menos um ator tenha
como favorito o filme adicionado no Ex. 2.

```sql
UPDATE actors 
SET favorite_movie_id = 22 
WHERE id = 44;
```

<br>

- 📖 Crie uma cópia temporária da tabela de filmes.

```sql
SELECT * INTO TEMP TABLE temp_movies FROM movies;
```

<br>

- 📖 Elimine desta tabela temporária todos os filmes que ganharam
menos de 5 prêmios.

```sql
DELETE FROM temp_movies WHERE awards < 5;
```

<br>

- 📖 Obtenha a lista de todos os gêneros que possuem pelo menos um
filme.

```sql
SELECT DISTINCT g.id, g.name 
FROM genres g, movies m
WHERE g.id = m.genre_id;
```

<br>

- 📖 Obtenha a lista de atores cujo filme favorito ganhou mais de 3
prêmios.

```sql
SELECT DISTINCT a.first_name, a.last_name
FROM actors a, movies m
WHERE a.favorite_movie_id = m.id
AND m.awards > 3;

EXPLAIN SELECT DISTINCT g.id, g.name 
FROM genres g, movies m
WHERE g.id = m.genre_id;10ADASD
```

<br>

- 📖 Use o plano de execução para analisar as consultas nos Ex 6 e 7.

```sql
EXPLAIN SELECT DISTINCT g.id, g.name 
FROM genres g, movies m
WHERE g.id = m.genre_id;

EXPLAIN SELECT a.first_name, a.last_name, m.title 
FROM actors a, movies m
WHERE a.favorite_movie_id = m.id
AND m.awards > 3;
```

<br>

- 📖 O que são os índices? Para que servem?

Os índices são usados para recuperar dados do banco de dados mais rapidamente do que de outra forma. Os usuários não podem ver os índices, eles são usado apenas para acelerar as buscas/consultas.

<br>

- 📖 Crie um índice sobre o nome na tabela de filmes.

```sql
CREATE INDEX idx_title ON movies (title);
```

<br>

- 📖 Verifique se o índice foi criado corretamente.

```sql
SELECT tablename, indexname, indexdef
FROM pg_indexes
WHERE schemaname = 'public'	AND tablename = 'movies'
ORDER BY tablename,	indexname;
```

<br>
