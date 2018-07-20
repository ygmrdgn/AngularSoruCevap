import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { rootRoute } from '../../../node_modules/@angular/router/src/router_module';


@Component({
  selector: 'app-sorularigor',
  templateUrl: './sorularigor.component.html',
  styleUrls: ['./sorularigor.component.scss'],


})
export class SorularigorComponent implements OnInit {

  sorular$: Object;
  
  constructor(private data: DataService) { 
    }

  ngOnInit() {
    this.data.getSorular().subscribe(
      data => this.sorular$ = data 
    );
  }
delete(id){
  this.data.deleteSoru(id).subscribe(res => {
    console.log('Deleted');
    window.location.reload(true);
  });
}
}
