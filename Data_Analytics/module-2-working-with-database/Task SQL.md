# COUNTRY table

'''

CREATE TABLE country(
cid int AUTO_INCREMENT PRIMARY KEY,
country varchar(255)
)
'''


# state table

'''

CREATE TABLE state(
sid int AUTO_INCREMENT PRIMARY KEY,
state varchar(255)
)
'''

# city table

'''

CREATE TABLE city(
cityid int AUTO_INCREMENT PRIMARY KEY,
city varchar(255)
)
'''


# user table


'''

CREATE TABLE users(
uid int AUTO_INCREMENT PRIMARY KEY,
name varchar(255),
phone int,
added_date DATe,
cid int REFERENCES country(cid),
sid int REFERENCES state(sid),
cityid int REFERENCES city(cityid),
address varchar(225)
)


'''




# uppercase from country,state and city

'''

SELECT ucase(country) FROM country

'''


'''

SELECT ucase(state) FROM state

'''


'''

SELECT ucase(city) FROM city

'''



# joining all the tables in users



'''

SELECT users.name,users.address,country.country,state.state,city.city FROM users JOIN country ON users.cid=country.cid JOIN state ON users.sid=state.sid JOIN city on users.cityid=city.cityid

'''



# what is join ?

1. join is used to join more than one column data with common filed if data matched one table to another tables 

**department**

|depid(pk)|   depname |
|-------- |-----------|
|  1      |   IT      |
|  2      |   CSE     |
|  3      |   HR      |
|  4      |   Finance |
|  5      |   Bank    |

**employee**

| empid  | empname | age  | salary | depid(fk) |
|--------|---------|------|--------|-----------| 
|  1     | forum   | 21   | 15500  |  1        | 
|  2     | faiz   | 20   | 18500  |  1        | 
|  3     | manan   | 22   | 125500  |  1        | 
|  4     | ashtha   | 23   | 115500  |  2        | 
|  5     | brijesh   | 35   | 17500  |  1        | 
|  6     | pranav   | 22   | 16500  |  2       |   


# Question : write a query to create departments tables and insert 4 rows or data
# Question : write a query to fetch only depname in uppercase or lowercase
# Question : write a query to fetch only depname in decending order 
# Question : write a query to fetch employee details who's salary is second highest
# Question : write a query to fetch only details of empid 3,5,2 employee details 
# Question : write a query to fetch only employee details who's name start with 'f' character
# Question : write a query to fetch deprtmentname inside of employee tables with join query 



# task base query


1. Select all columns from the Users table.     **SELECT * FROM users**
2. List the names of all products in the 'Electronics' category.     **SELECT * FROM `products` WHERE category='electronic'**
3. Find all users who signed up in 2023.     **SELECT * FROM users WHERE year(signup_date)='2023':**
4. List products with a price greater than $500.    **SELECT * FROM products WHERE price>500** 
5. Find all orders with a 'Pending' status.     **SELECT * FROM orders WHERE status='PENDING'**
6. Select the email of the user with user_id 10.     **SELECT email FROM users WHERE user_id=10**
7. List all unique countries in the Users table.     **SELECT DISTINCT country FROM users** *ask*
8. Find products where the name starts with 'S'.     **SELECT * FROM products WHERE name LIKE 's%'**
9. Get the top 5 most expensive products.     **SELECT * FROM products order by price DESC LIMIT 0,5**
10. Find all orders placed in January 2024.     **SELECT * FROM orders WHERE YEAR (orderd_date)=2024 AND month (orderd_date)= 1**
11. List users whose name contains 'John'.     **SELECT * FROM users WHERE name LIKE 'jhon%'**
12. Find products with stock_count between 10 and 50.     **SELECT * FROM products WHERE stock_count BETWEEN 10 and 50**
13. Get all orders from users in 'USA'.     **SELECT * FROM users WHERE country='USA'**
14. List products sorted by price (lowest to highest).     **SELECT * FROM products order by price ASC**
15. Count the total number of users.     **SELECT max(user_id) FROM users**
16. Find all products that are NOT in the 'Clothing' category.     **SELECT * FROM products WHERE category!='Clothing'**
17. List orders sorted by order_date descending.     **SELECT * FROM orders ORDER BY orderd_date DESC**
18. Find users who signed up before 2022.     **SELECT * FROM users WHERE signup_date< '2022'**
19. Get the names of products that cost exactly $99.99.     **SELECT * FROM products WHERE price='99.99'**
20. Show the first 10 rows of the Order_Items ta33333333333333333ble.     **SELECT * FROM order_items WHERE order_id BETWEEN 1 AND 10**
 




SELECT users.*, country.cid, state.sid, city.cityid FROM users right JOIN country ON users.cid=country.cid 
right JOIN state ON users.sid=state.sid
right JOIN city on users.cityid=city.cityid








# TCL ....

 1. transactional control language


CREATE TABLE faculty (
faculty_id int PRIMARY KEY AUTO_INCREMENT,
faculty_name varchar(255),
department varchar,




# Task base query 2

# create a country table
 
 ***

CREATE TABLE country(
country_id int PRIMARY KEY AUTO_INCREMENT,
name varchar(255)
)
 ***

# create faculty table

 ***
  CREATE TABLE faculty (
faculty_id int PRIMARY KEY AUTO_INCREMENT,
faculty_name varchar(255),
department varchar(255),
country_id int REFERENCES country(country_id),
email varchar(255)
)

 ***

 # adding unique key
  
  ***

   ALTER TABLE faculty ADD UNIQUE (email)

  ***


# create a faculty table

 ***

 CREATE TABLE courses (
course_id int PRIMARY KEY AUTO_INCREMENT,
course_name varchar(255),
faculty_id int REFERENCES faculty(faculty_id)
)

 ***

 # create a student table

  ***

CREATE TABLE students (
student_id int PRIMARY KEY AUTO_INCREMENT,
student_name varchar(255),
age INT,
country_id int REFERENCES country(country_id)
)

  ***
 
 # create enrollments table


 ***


  CREATE TABLE enrollments (
enrollment_id int PRIMARY KEY AUTO_INCREMENT,
student_id int REFERENCES students(student_id),
course_id int REFERENCES courses(course_id)
)


 ***