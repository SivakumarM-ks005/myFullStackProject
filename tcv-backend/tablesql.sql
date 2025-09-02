create table user (
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(100),
    password varchar(50),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);

INSERT INTO user (name, contactNumber, email, password, status, role) VALUES 
('sivakumar', '9962543540', 'sivakumar@gmail.com','welcome', 'true', 'admin');

create table category (
    id int Not Null AUTO_INCREMENT,
    name varchar(250),
    primary key(id) 
);