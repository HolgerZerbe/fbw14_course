        
-- Finde alle customers mit dem Anfangsbuchstaben "K" für den firstname
-- Alle Customers deren Nachname entweder mit A oder N endet.
-- Vorname, Nachname und Alter aller Customers die jünger sind als 35,
-- Finde alle Customers, die sich nach 20 Uhr registriert haben
-- Alle Customer, die einen Email-Account bei googlemail haben

select * from customers;

select * from customers where firstname like 'k%';

select * from customers where lastname like '%A' or lastname like '%n';

select firstname, lastname, timestampdiff(year, birthdate, curdate()) as age from customers where birthdate>'1984-10-09';

select firstname, lastname, timestampdiff(year, birthdate, curdate()) as age from customers where timestampdiff(year, birthdate, curdate()) <35;

select * from customers where hour(registered) >20;

select * from customers where email like '%googlemail%' or email like '%gmail%';



-- lesen/select
-- Alle:
select * from customers;
-- filtern:
select * from customers where city = 'Berlin';
-- sortieren:
select * from customers where lastname = 'Meier' order by firstname desc;

-- Verändern/ Update:
update customers set city = 'Bln' where city = 'Berlin';
--
update customers set firstname = lcase(firstname);

-- Einfügen/insert
insert into customers (
	id, firstname, lastname, registered, birthdate, phone, city, street, postal, email
    )
values (
	10000, 'Harvey', 'Hase', now(), '2012-10-29','49306543210', 'Berlin','Rufacher Weg 13','12349', null
    );

-- Löschen
delete from customers where city = 'bielefeld';    
