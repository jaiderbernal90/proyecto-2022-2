create database project;
use project;

create table users(
    id int auto_increment primary key,
    name text not null,
    email text not null unique,
    password text not null,
    type_document text null
    document int null
    date_birth text null
    blood_type text null
    health_habits text null
    congenitals_defects text null
    medical_conditions text null
    eps text null
    responsible_home text null
    gender text null
    created_at datetime,
    updated_at datetime
);