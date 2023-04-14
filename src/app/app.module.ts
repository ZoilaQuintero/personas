import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> b057da6 (first commit)

import { AppComponent } from './app.component';
import { ListadoComponent } from './personas/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    HttpClientModule
>>>>>>> b057da6 (first commit)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
