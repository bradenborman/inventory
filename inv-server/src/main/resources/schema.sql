CREATE TABLE item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  barcode VARCHAR(255),
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  value DECIMAL(10,2),
  quantity INT,
  location VARCHAR(255)
);