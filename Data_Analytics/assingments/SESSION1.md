1. Install MySQL or PostgreSQL on your system and create a new database named 'music_streaming_app' using the command line or GUI tool of your choice. 
 ***

 CREATE DATABASE music_streaming_app

 ***

2. Inside the 'music_streaming_app' database, create a table called 'playlists' with columns: playlist_id (integer, primary key), name (varchar), and created_by (varchar).
 ***

 CREATE TABLE playlists(
playlist_id int PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
created_by varchar(255)
)

***


3. Insert three sample rows into the 'playlists' table representing playlists like 'Bollywood Hits', 'Chill Vibes', and 'Workout Mix', each created by a different user.

 ***

 Bollywood Love Songs — Arijit Singh
Lo-Fi Nights — Anuv Jain
Beast Mode Workout — AP Dhillon

 ***

4. Write an SQL SELECT query to display all playlists created by the user 'Amit' from the 'playlists' table.<br><br><em><strong>Hint:</strong> Use the WHERE clause to filter by the 'created_by' column.</em>

  
  ***

  SELECT * FROM playlists WHERE created_by='Amit'

  ***

5. Open ChatGPT or Copilot and ask it to explain the difference between a table, a row, and a column in SQL using an example from a food delivery app like Zomato. Paste the explanation you receive into your assignment.

# Difference Between a Table, Row, and Column in SQL

In SQL, a **table** is a collection of related data organized into rows and columns. For example, in a food delivery app like Zomato, there could be a table called **Orders** that stores information about customer orders.

## Example Orders Table

| Order_ID | Customer_Name | Restaurant | Amount |
| -------- | ------------- | ---------- | ------ |
| 101      | Rahul         | Pizza Hut  | 450    |

## Table

A **table** is the entire collection of data. In this example, the **Orders** table contains information about customer orders.

## Row

A **row** represents a single record in the table. For example, the row containing Order_ID `101` represents Rahul's order from Pizza Hut.

## Column

A **column** represents a specific attribute of the data. In the Orders table, `Order_ID`, `Customer_Name`, `Restaurant`, and `Amount` are columns.

## Summary

* **Table** = Entire collection of data (e.g., Orders table)
* **Row** = One complete record (e.g., Rahul's order)
* **Column** = One field of information (e.g., Customer_Name or Amount)
