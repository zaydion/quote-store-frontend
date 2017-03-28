import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from 'app/quotes.component';
import { QuoteDetailComponent } from 'app/quote-detail.component';


const routes: Routes = [
  { path: 'quotes', component: QuotesComponent},
  { path: 'quotes/:id', component: QuoteDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
