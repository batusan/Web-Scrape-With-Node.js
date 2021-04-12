# Web Scrape With Node.js!

Simply data scraping API from the [Etsy](https://www.etsy.com/)

# Requirements
All packages are included in package.json
* Node JS
*   Mysql (Database)

About packages  :
* Express (For API)
* Cheerio (Data Scrape)
* Cors (Handling Requests) 
* Request and Request promise packages 

# Usage

    npm install
    npm index.js
	
   After You can visit front-end on frontend folder.
   Bootstrap based website without JS Framework

# API 


    /api/products - Listing Products (GET)
    /api/products/:product_id - Product Detail (GET) 
    /api/products/ - Adding Product (POST)
You can visit [router](https://github.com/batusan/Web-Scrape-With-Node.js/blob/main/routes/products.js) module to check more detail;

# Docker Usage

> We cannot use docker-compose up to start both service due to mysql late init problems.

    docker-compose up --detach --build mysql1
    #After the init process over (Wait a lil bit almost 10 15 sec)
    docker-compose up --detach --build myapp
    # App gonna start on http://localhost:49160 with example products
