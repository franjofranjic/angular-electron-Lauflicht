import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ControllerComponent } from './controller/controller.component';
import { OutputComponent } from './output/output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSelectModule, MatSliderModule} from '@angular/material';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ControllerComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    NgbButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
