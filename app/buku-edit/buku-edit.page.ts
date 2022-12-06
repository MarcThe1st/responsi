import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.page.html',
  styleUrls: ['./buku-edit.page.scss'],
})
export class BukuEditPage implements OnInit {
  id: any;
  nama_buku: any;
  genre_buku: any;
  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService,) { }

  ngOnInit() {
  }
  ambilbuku(id: any) {
    this._apiService.lihat(id, '/lihatbuku.php?id=').subscribe({
    next: (hasil: any) => {
    console.log('sukses', hasil);
    let buku = hasil;
    this.nama_buku = buku.nama_buku;
    this.genre_buku = buku.genre_buku;
    },
    error: (error: any) => {
    this._apiService.notif('gagal ambil data');
    }
    })
    }
    editbuku() {
    let data = {
    id: this.id,
    nama_buku: this.nama_buku,
    genre_buku: this.genre_buku,
    }
    this._apiService.edit(data, '/editbuku.php')
    .subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.id = '';
    this.nama_buku = '';
    this.genre_buku = '';
    this._apiService.notif('berhasil edit Buku');
    this.router.navigateByUrl('/home');
    },
    error: (err: any) => {
    this._apiService.notif('gagal edit Buku');
    }
    })
    }
   
}
