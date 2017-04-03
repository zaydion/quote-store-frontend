import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes.component';
import { QuoteDetailComponent } from './quote-detail.component';
import { QuoteService } from './quote.service';
import { NewQuoteComponent } from './new-quote/new-quote.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ QuoteService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
