import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from 'app/quotes.component';
import { QuoteDetailComponent } from 'app/quote-detail.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';


const routes: Routes = [
  { path: 'quotes', component: QuotesComponent},
  { path: 'quotes/:id', component: QuoteDetailComponent },
  { path: 'quote/new', component: NewQuoteComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
