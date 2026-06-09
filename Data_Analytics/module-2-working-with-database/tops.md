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

SELECT 
users.name,
users.address,
country.country,
state.state,
city.city
FROM users
JOIN country ON users.cid=country.cid
JOIN state ON users.sid=state.sid
JOIN city on users.cityid=city.cityid

'''