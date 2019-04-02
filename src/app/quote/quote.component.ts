import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public maxCount =0;
  quotes =[
    new Quote(1, 'Stephen Hawking','Dan','Intelligence is the ability to adapt to change.'

    ,new Date(2017,8,20,) ,0,0),
    new Quote(1, 'Michael Faraday','Natasha','No matter what you look at, if you look at it closely enough, you are involved in the entire universe.'

    ,new Date(2010,1,11,) ,0,0),
    new Quote(1, 'Stephen Hawking','Conard','Common sense is nothing more than a deposit of prejudices laid down in the mind before you reach eighteen.'

    ,new Date(2001,1,11,) ,0,0),

  ];

  submitLike(quote,index){
    quote.likes=quote.likes+1;
    if(quote.likes>this.maxCount) this.maxCount=quote.likes;
    else if(quote.likes<=this.maxCount) console.log(this.maxCount);
  }

  submitUnlike(quote){
    quote.dislikes= quote.dislikes+1
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }

  completeQuote(isComplete,index){
    if(isComplete){
      let toComplete = confirm('Are you sure you want to delete?')
      if(toComplete){
        this.quotes.splice(index,1)
      }
    }
  }

  toogleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

  constructor() {

  }

  ngOnInit() {
  }

}


