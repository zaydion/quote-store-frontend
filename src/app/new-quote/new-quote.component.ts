import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  quote = new Quote();

  constructor(
    private quoteService: QuoteService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  createQuote(): void {
    this.quoteService.create(this.quote)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
