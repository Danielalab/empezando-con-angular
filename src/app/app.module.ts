import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ShowNameComponent } from './components/show-name/show-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ShowNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
