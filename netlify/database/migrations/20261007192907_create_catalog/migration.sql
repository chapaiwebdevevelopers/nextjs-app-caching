CREATE TABLE "books" (
	"id" text PRIMARY KEY,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"category" text NOT NULL,
	"price" double precision NOT NULL,
	"rating" double precision NOT NULL,
	"short_description" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" text PRIMARY KEY,
	"product_name" text NOT NULL,
	"category" text NOT NULL,
	"short_description" text NOT NULL,
	"description" text NOT NULL,
	"price" double precision NOT NULL,
	"image" text NOT NULL,
	"rating" double precision NOT NULL,
	"stock" integer NOT NULL
);
