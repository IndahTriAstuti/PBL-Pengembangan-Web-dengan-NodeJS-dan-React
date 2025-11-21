create DATABASE pegawai;

use pegawai;

-- membuat tabel hobi
create table hobi(
id int auto_increment primary key,
nama_hobi varchar(50) not null);

-- membuat tabel asn
create table asn(
nip char(18),
nama varchar(100),
id_hobi int,
primary key(nip),
foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(100);
rename table asn to pns;

drop table pns;
drop database pegawai;