/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables. mysql -u student -p
 */


 USE grocery;

CREATE TABLE groceryList 
(id INT AUTO_INCREMENT,
foodName VARCHAR(20),
quantity INT NOT NULL,
PRIMARY KEY (id)
);



