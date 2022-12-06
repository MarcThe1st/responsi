<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama_buku = trim($data['nama_buku']);
$genre_buku = trim($data['genre_buku']);
if ($nama_buku != '' and $genre_buku != '') {
 $query = mysqli_query($koneksi, "insert into buku(nama_buku,genre_buku) 
values('$nama_buku','$genre_buku')");
 $pesan['status'] = 'berhasil';
} else {
 $pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);