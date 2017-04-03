import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { Quote } from './quote';
import { QuoteService } from './quote.service';


@Component({
  selector: 'quote-detail',
  templateUrl: './quote-detail.component.html'
})

export class QuoteDetailComponent implements OnInit {
  quote: Quote;

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.quoteService.getQuote(+params['id']))
      .subscribe(quote => this.quote = quote);
  }

  buyQuote(quote) {
    alert("Congratulations! You've purchased an awesome quote from: " + quote.title);
  }

  updateQuote(): void {
    this.quoteService.update(this.quote)
      .then(() => this.goBack());
  }

  deleteQuote(quote) {
    this.quoteService.delete(this.quote)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
