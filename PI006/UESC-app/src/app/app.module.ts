import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNewsEmphasisComponentComponent } from './menu-news-emphasis-component/menu-news-emphasis-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { EmphasisComponentComponent } from './emphasis-component/emphasis-component.component';
import { ServicesResultsComponentComponent } from './services-results-component/services-results-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNewsEmphasisComponentComponent,
    HeaderComponentComponent,
    NewsComponentComponent,
    EmphasisComponentComponent,
    ServicesResultsComponentComponent,
    ServiceComponentComponent,
    ResultComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
