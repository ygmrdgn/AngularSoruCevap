import { Component, OnInit } from '@angular/core';
import { SoruModel} from './soruModel';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-guncelle',
  templateUrl: './guncelle.component.html',
  styleUrls: ['./guncelle.component.scss']
})
export class GuncelleComponent implements OnInit {
  submitted = false;
  bilgi:object;
  soru= new SoruModel();
  constructor(private formBuilder: FormBuilder,private router: Router, private data:DataService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.bilgi = params.id );
   }
 

  addForm: FormGroup;

  ngOnInit() {
    this.data.getSoru(this.bilgi).subscribe(data => {
      this.soru = this.soru;
    });
  }
  
  newQuestion(): void {
    this.submitted = false;
    this.soru = new SoruModel();
  }
  kayitEkle () {

      this.data.soruGuncelle(this.soru,this.bilgi).subscribe(
        res => {
          console.log("Yeni Kişi Ekleme İşlemi başarılı." + res);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error);
        }
      );
  }

onSubmit(){
  this.submitted = true;
  this.kayitEkle();
}

}
