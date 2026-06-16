1. Create two tables in your database: 'restaurants' (id, name, city) and 'dishes' (id, restaurant_id, dish_name, price). Insert at least 3 restaurants and 2-3 dishes for each restaurant.
 
  # RESTAURANTS Table
   
     ***
       CREATE TABLE restaurants (
rid int PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
city varchar(255)
)
  
  ***

  # DISHER Table

   ***

    CREATE TABLE dishes (
did int PRIMARY KEY AUTO_INCREMENT,
rid int REFERENCES restaurants(rid),
dish_name varchar(255),
price int
)

 ***





2. Write an SQL INNER JOIN query to display each dish along with its restaurant name and city, similar to how Zomato shows dish details with the restaurant info.

  ***

   SELECT dishes.dish_name,restaurants.name,restaurants.city FROM dishes JOIN restaurants on dishes.rid=restaurants.rid


   ***
 





3. Write an SQL LEFT JOIN query to list all restaurants and their dishes, showing restaurants even if they currently have no dishes on the menu Use LEFT JOIN so restaurants without dishes still appear in the results with NULL for dish columns.

  ***

   SELECT restaurants.name,
       restaurants.city,
       dishes.dish_name
FROM restaurants
LEFT JOIN dishes
ON restaurants.rid = dishes.rid;

***






4. Write an SQL RIGHT JOIN query to display all dishes and their restaurant names, including any dishes that might not be linked to a restaurant (simulate a data error where a dish has a restaurant_id that doesn't match any restaurant).

 ***
  
   SELECT dishes.dish_name,restaurants.name,restaurants.city FROM dishes RIGHT JOIN restaurants on dishes.rid=restaurants.rid

   ***






5. Given this scenario: You want to show a list of all playlists and the songs inside them, like Spotify. Explain which JOIN type (INNER, LEFT, or RIGHT) you would use to show all playlists, even if some are empty, and write the SQL query for it.


# A LEFT JOIN shows all playlists, even if some playlists do not have any songs. Empty playlists will still appear, and the song columns will show NULL.

 # QUERY

   ***

    SELECT playlists.playlist_name,
       songs.song_name
FROM playlists
LEFT JOIN songs
ON playlists.pid = songs.pid;

 ***


