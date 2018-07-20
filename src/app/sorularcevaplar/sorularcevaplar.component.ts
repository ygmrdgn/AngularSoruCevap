import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sorularcevaplar',
  templateUrl: './sorularcevaplar.component.html',
  styleUrls: ['./sorularcevaplar.component.scss']
})
export class SorularcevaplarComponent implements OnInit {


  sorularcevaplar$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.sorularcevaplar$ = params.id );

   }

  ngOnInit() {
    this.data.getSorularCevaplar(this.sorularcevaplar$).subscribe(
      data => this.sorularcevaplar$ = data 
    );
   

  }

}
