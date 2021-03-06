import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Quote } from 'app/quote';
import { QUOTES } from 'app/mock-quotes';


@Injectable()
export class QuoteService {
  private quotesUrl = "http://localhost:3000/quotes";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getQuotes(): Promise<Quote[]> {
    return this.http.get(this.quotesUrl)
                    .toPromise()
                    .then(response => response.json() as Quote[])
                    .catch(this.handleError);
  }


  getQuote(id: number): Promise<Quote> {
    const url = `${this.quotesUrl}/${id}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json() as Quote)
                    .catch(this.handleError);
  }


  create(quote: Quote): Promise<Quote> {
    console.log(quote);
    console.log(JSON.stringify(quote));
    const url = `${this.quotesUrl}`

    return this.http
      .post(url, JSON.stringify(quote), { headers: this.headers })
      .toPromise()
      .then(() => quote)
      .catch(this.handleError);
  }

  update(quote: Quote): Promise<Quote> {
    const url = `${this.quotesUrl}/${quote.id}`

    return this.http
      .put(url, JSON.stringify(quote), { headers: this.headers })
      .toPromise()
      .then(() => quote)
      .catch(this.handleError);
  }

 delete(quote: Quote): Promise<Quote> {
    const url = `${this.quotesUrl}/${quote.id}`

    return this.http
      .delete(url)
      .toPromise()
      .then(() => quote)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
