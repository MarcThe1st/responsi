import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 constructor(public http: HttpClient, public alert: AlertController) { }
 //link API
 apiURL() {
 return 'http://localhost/backend';
 }
 //fungsi untuk insert data
 tambah(data: any, endpoint: string) {
 return this.http.post(this.apiURL() + '/' + endpoint, data);
 }
 //fungsi untuk edit data
 edit(data: any, endpoint: string) {
 return this.http.put(this.apiURL() + '/' + endpoint, data);
 }
 //fungsi untuk menampilkan semua data
 tampil(endpoint: string): Observable<any> {
 return this.http.get(this.apiURL() + '/' + endpoint);
 }
 //fungsi untuk menghapus data
 hapus(id: any, endpoint: string) {
 console.log(id);
 return this.http.delete(this.apiURL() + '/' + endpoint + '' + id);
 }
 //fungsi untuk melihat salah satu data
 lihat(id: any, endpoint: string) {
 return this.http.get(this.apiURL() + '/' + endpoint + '' + id);
 }
 //fungsi untuk menampilkan notifikasi
 notif(pesan: string) {
 this.alert.create({
 header: 'Notifikasi',
 message: pesan,
 buttons: ['OK'],
 }).then(res => {
 res.present();
 });
 }
 
}
