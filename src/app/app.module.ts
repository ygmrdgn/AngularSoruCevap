import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SorularigorComponent } from './sorularigor/sorularigor.component';
import { SorularcevaplarComponent } from './sorularcevaplar/sorularcevaplar.component';
import { CevapekleComponent } from './cevapekle/cevapekle.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { SoruekleComponent } from './soruekle/soruekle.component';
import { DataService } from './data.service';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SorularigorComponent,
    SorularcevaplarComponent,
    CevapekleComponent,
    GuncelleComponent,
    SoruekleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
