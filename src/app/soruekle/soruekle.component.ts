import { Component, OnInit } from '@angular/core';
import { SoruModel} from './soruModel';
import { DataService } from '../data.service';
import { Router } from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-soruekle',
  templateUrl: './soruekle.component.html',
  styleUrls: ['./soruekle.component.scss']
})
export class SoruekleComponent implements OnInit {

  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private data:DataService) { }
 
 
  soru= new SoruModel();
  addForm: FormGroup;

  ngOnInit() {

  }
  
  newQuestion(): void {
    this.submitted = false;
    this.soru = new SoruModel();
  }
  kayitEkle () {

      this.data.getSoruEkle(this.soru).subscribe(
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
