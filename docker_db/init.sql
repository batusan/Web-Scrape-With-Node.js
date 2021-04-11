
-- create the users for each database
CREATE USER 'dbconn'@'%' IDENTIFIED BY 'password';

GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `etsy`.* TO 'dbconn'@'%';

create database etsy;
use etsy;

CREATE TABLE IF NOT EXISTS products (
        product_id INT AUTO_INCREMENT,
        product_name VARCHAR(500),
        product_image VARCHAR(500),
        product_price VARCHAR(50),
        PRIMARY KEY(product_id)
    ); 


    INSERT INTO `products` (`product_id`, `product_name`, `product_image`, `product_price`) VALUES
(56, 'Macbook Air 13 “ 2020 laptop case sleeve Macbook pro 13 inch', 'https://i.etsystatic.com/27794268/r/il/3399dd/2897575528/il_794xN.2897575528_ikj1.jpg', '£25.32'),
(57, 'Laptop case, Personalized laptop sleeve, macbook case sleeve, laptop bag, leather laptop case, Handmade macbook sleeve case for 13 15 inch', 'https://i.etsystatic.com/17721401/r/il/5fd6b7/2170280520/il_794xN.2170280520_pinq.jpg', '£27.06+'),
(58, 'Premium Personalised Dummy Clip | Certified to EU safety regulations.', 'https://i.etsystatic.com/18041028/r/il/dffd1c/2888809380/il_794xN.2888809380_b87r.jpg', '£14.00'),
(59, 'Linen Pillow Cover, Solid Colour Throw Pillow Cover, Modern Cushion Cover Various Sizes, Lumbar Pillow Cover, Pastel Shades', 'https://i.etsystatic.com/12669534/r/il/5d6d2d/1535619250/il_794xN.1535619250_3zug.jpg', '£31.50+'),
(60, 'Simple Watercolour Floral/Leaf Bookmark', 'https://i.etsystatic.com/15227138/r/il/35dac4/2604937523/il_794xN.2604937523_e8bk.jpg', '£2.80');