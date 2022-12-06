import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  id: any;
  nama_buku: any;
  genre_buku: any; 
  constructor(private router: Router, public _apiService: ApiService,) { }

  ngOnInit() {
  }
  addbuku() {
    let data = {
    nama_buku: this.nama_buku,
    genre_buku: this.genre_buku,
    }
    this._apiService.tambah(data, '/tambahbuku.php')
    .subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.id = '';
    this.nama_buku = '';
    this.genre_buku = '';
    this._apiService.notif('berhasil input Buku');
    this.router.navigateByUrl('/home');
    },
    error: (err: any) => {
    this._apiService.notif('gagal input Buku');
    }
    })
    }   
}
