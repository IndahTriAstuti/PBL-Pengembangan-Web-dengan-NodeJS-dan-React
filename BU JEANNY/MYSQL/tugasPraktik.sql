-- nomor 1 membuat database
create database mystore;
show databases;
use mystore;

-- nomor 2 membuat tabel
create table categories(
	id int primary key auto_increment,
    name varchar(100)
);

create table users (
	id int primary key auto_increment,
    name varchar(100),
    email varchar(100),
    password varchar(100)
);

create table items (
	id int primary key auto_increment,
    name varchar(100),
    description text,
    price decimal(15,2),
    stock int,
    category_id int,
    user_id int,
    foreign key(category_id) references categories(id),
    foreign key(user_id) references users(id)
    on delete cascade on update cascade
);

-- cheking table
show tables;

-- nomor 3 mengisikan data pada tabel
insert into users values
(1, 'John Doe', 'john@doe.com', 'john123'),
(2, 'Jane Doe', 'jane@doe.com', 'jane123'),
(3, 'Alice', 'alice@example.com', 'alicepwd'),
(4, 'Bob', 'bob@example.com', 'bobpws');
-- checking
select * from users;

insert into categories values
(1, 'gadget'),
(2, 'cloth'),
(3, 'men'),
(4, 'women'),
(5, 'branded'),
(6, 'electronics'),
(7, 'fashion');

insert into items values
(1, 'Sumsang b50', 'hape keren dari merek sumsang', 4000000, 100, 1, 1),
(2, 'Uniklooh', 'baju keren dari brand ternama', 500000, 50, 2, 2),
(3, 'IMHO Watch', 'jam anak yang jujur banget', 2000000, 10, 1, 1),
(4, 'Nike Shoes', 'sepatu olahraga nyaman dan stylish', 1500000, 70, 5, 3),
(5, 'Apple Iphone', 'smartphon canggih dan populer', '12000000', 30, 6,4),
(6, 'leather Jacket', 'jaket kulit untuk pria', '2500000', 12, 7, 3);
-- cheking
select * from items;

-- nomor 4 menampilakn seluruh data user tanpa password
select id, name, email from users;

-- nomor 5 menampilkan seluruh item yang lebih dari 1000000
select * from items where price > 1000000;

--  nomor 6 
select * from items where items.name regexp 'uniklo|watch|sang';

-- nomor 7
update 	items set price = 2500000 where id = '1';

-- nomor 8
select categories.name as `Category Name`, count(items.name) as `Item Count`
from categories join items on categories.id = items.category_id
group by `Category Name`
having `Item Count` > 1;

-- nomor 9
select u.name as `Owner Name`, round(avg(i.price)) as `AVG Price`
from users u join items i on u.id = i.user_id
group by u.name;

--  nomor 10
select i.name as `Item Name`, c.name as `Category Name`, u.name as `Owner name`
from items i join categories c on i.category_id = c.id
			 join users u on i.user_id = u.id
where i.stock <20;
             
--  nomor 11
select u.name as `User Name`, i.name as `Item Name`, i.stock as `stock`
from users u join items i on u.id = i.user_id
where i.stock > 50;

-- nomor 12
select u.name as `Owner Name`, i.name as `Item Name`, i.price as `Price` 
from users u join items i on u.id = i.user_id
where i.price = (
select max(price)
from items
);

-- nomor 13
select u.name as `Owner Name`, (i.price * i.stock) as `Total Value`
from users u join items i on u.id = i.user_id
order by `Total Value`desc;

-- nomor 14
create or replace view vw_item_details as
select i.id, i.name, i.description, i.price, i.stock,
c.name as `Category Name`,
u.name as `Owner Name`, u.email as `Owner Email`
from items i join categories c on i.category_id = c.id
			 join users u on i.user_id = u.id;

-- nomor 15
SELECT * FROM mystore.vw_item_details;

-- nomor 16
select `Owner Name`, sum(stock) as `Total Stock`
from vw_item_details
group by `Owner Name`
order by `Total Stock` desc;

-- nomor 17
select name as `Product Name`, `Category Name`, `Owner Email`
from vw_item_details
where price > 1000000; 


--  nomor 18
create or replace view view_owner_stock as
select u.name as `Owner Name`, sum(i.stock) as `Total Stock`
from users u join items i on u.id = i.user_id
group by `Owner Name`;

--  nomor 19
drop view if exists view_owner_stock;
 


	


