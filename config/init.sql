CREATE DATABASE IF NOT EXISTS db_perpus;
USE db_perpus;

CREATE TABLE IF NOT EXISTS buku (
  kode_buku INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(150),
  pengarang VARCHAR(100),
  penerbit VARCHAR(100),
  harga INT
);
