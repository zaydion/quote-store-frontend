import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quote } from 'app/quote';
import { QUOTES } from 'app/mock-quotes';
import { QuoteService } from 'app/quote.service';

@Component({
  selector: 'all-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  title = 'Best Quotes in the World';
  quotes: Quote[];
  quote;

  constructor(
    private quoteService: QuoteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .then(quotes => this.quotes = quotes);
  }


  gotoDetail(quote: Quote): void {
    this.router.navigate(['/quote/:id', this.quote.id]);
  }

}
