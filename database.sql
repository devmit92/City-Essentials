CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "full_name" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL
);

CREATE TABLE "cities" (
	"id" SERIAL PRIMARY KEY, 
	"city_name" varchar (255) NOT NULL,
	"zip" varchar () NOT NULL
);

CREATE TABLE "businesses" (
	"id" SERIAL PRIMARY KEY,
	"category" varchar (255) NOT NULL,
	"business_name" varchar (255) NOT NULL,
	"address" varchar (255) NOT NULL,
	"city_id" INT REFERENCES "cities",
	"phone_number" varchar (15) NOT NULL,
	"hours" varchar (50) NOT NULL,
	"website" varchar (255)
);

CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "users",
	"post_date" DATE,
	"post_time" TIME
); 

CREATE TABLE "city_businesses" (
    "id" SERIAL primary key,
    "city_id" INT REFERENCES "cities",
    "businesses_id" INT REFERENCES "businesses"
);

SELECT * FROM "businesses"
JOIN "city_businesses" ON "businesses"."id" = "city_businesses"."businesses_id"
JOIN "cities" ON "city_businesses"."city_id" = "cities"."id";

CREATE TABLE "community" (
	"id" SERIAL PRIMARY KEY,
 	"user_id" INT REFERENCES "users",
  	"posting_date" DATE NOT NULL DEFAULT CURRENT_DATE,
  	"posting_time" TIME NOT NULL DEFAULT CURRENT_TIME
);

CREATE TABLE "community_users" (
    "id" SERIAL primary key,
    "user_id" INT REFERENCES "users",
    "community_id" INT REFERENCES "community"
);