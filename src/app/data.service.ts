import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SoruModel } from './soruekle/soruModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class DataService {
  private baseUrl = 'http://localhost:8080/sorular';
  
 
  constructor(private http: HttpClient) { }

  getSoru(id){
    return this.http.get('http://localhost:8080/sorular/'+id)
  }
  getSorular(){
    return this.http.get('http://localhost:8080/sorular')
  }
  getSorularCevaplar(soruId){

    return this.http.get('http://localhost:8080/sorular/'+soruId+'/cevaplar')
  }
  deleteSoru(soruId){
    return this.http.delete('http://localhost:8080/sorular/'+soruId)
  }
  soruGuncelle(soru:SoruModel,id){
  const headers=new HttpHeaders().set('Content-Type','application/json');
  return this.http.put<SoruModel>("http://localhost:8080/sorular/"+id,JSON.stringify(soru),{
    headers:headers
  });
  }
 /* getSoruGuncelle(soruId){
    return this.http.put('localhost:8080/sorular/'+soruId)

  }
  */
 getSoruEkle(soru:SoruModel) {
  //return this.http.post('http://localhost:8080/sorular',soru);
  const headers=new HttpHeaders().set('Content-Type','application/json');
  return this.http.post<SoruModel>("http://localhost:8080/sorular",JSON.stringify(soru),{
    headers:headers
  });
}

}
