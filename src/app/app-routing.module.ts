import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SorularigorComponent } from './sorularigor/sorularigor.component';
import { SorularcevaplarComponent } from './sorularcevaplar/sorularcevaplar.component';
import { CevapekleComponent } from './cevapekle/cevapekle.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { SoruekleComponent } from './soruekle/soruekle.component';




const routes: Routes = [


  {
    path: 'sorular',
    component: SorularigorComponent
  },
  
  {
    path: 'sorukayit',
    component: SoruekleComponent
  },

  {
    path: ':id/cevaplar',
    component: SorularcevaplarComponent
  },

  {
    path:'sorular/guncelle/:id',
    component: GuncelleComponent
  },
  
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
class BrowserAnimationsModule {
}
