import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from 'angular-datatables';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhoweareComponent } from './components/whoweare/whoweare.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { PeopleComponent } from './components/people/people.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SearchFilter } from './filters/search-filter';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    WhoweareComponent,
    ResourcesComponent,
    PeopleComponent,
    SearchFilter,
    ContactUsComponent,

  ],
  imports: [
    DataTablesModule,
    Ng2TableModule,
    Ng2SmartTableModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
