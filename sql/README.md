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
