create database if not exists abc_order_management;

use abc_order_management;

create table if not exists customers(
   id int auto_increment,
   name varchar(50) not null,
   address varchar(100) not null,
   email varchar(100) not null,
   phone varchar(20) not null,
   constraint pk_customer primary key(id),
   constraint un_email unique(email),
   constraint un_phone unique(phone)
);

alter table customers 
modify column name varchar(255) not null,
modify column address text not null,
modify column email varchar(255) not null;

create table if not exists products(
   id int auto_increment,
   name varchar(50) not null,
   description text not null,
   price decimal(10,2) not null,
   stock int not null,
   constraint pk_product primary key(id)
);

alter table products 
modify column name varchar(255) not null,
modify column price decimal(15,2) not null;

alter table products
add column category varchar(100) not null,
add column barcode varchar(50) not null,
add column status varchar(50) not null;

create table if not exists purchase_orders(
   id int auto_increment,
   date date not null,
   customer_id int not null,
   delivery_address varchar(50) not null,
   constraint pk_order primary key(id),
   constraint fk_customer foreign key(customer_id) references customers(id)
);

alter table purchase_orders
modify column delivery_address text not null;

alter table purchase_orders 
add column track_number varchar(100) not null,
add column status varchar(50) not null;

alter table purchase_orders 
add constraint un_track unique(track_number);

create table if not exists payments(
   id int auto_increment,
   order_id int not null,
   date date not null,
   amount text not null,
   payment_method varchar(100) not null,
   constraint pk_payment primary key(id),
   constraint fk_order foreign key(order_id) references purchase_orders(id)
);

create table order_details(
   id int auto_increment,
   order_id int not null,
   product_id int not null,
   quantity int not null,
   price decimal(15,2) not null,
   constraint pk primary key(id),
   constraint fk_order_purchase foreign key(order_id) references purchase_orders(id) on delete cascade,
   constraint fk_product foreign key(product_id) references products(id)
);

