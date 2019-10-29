import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  quote:Quote [] = [
  new Quote (1, 'get yourself a me coz im lit', 'Be proud of who you are always' ),
  new Quote (2,'life has no limitations except the ones you make','you will always decide about your life'),
  new Quote (3,'Never be intimidated by what you do not know' ,'You always have a room to know everything it only takes time'),
  new Quote (4,'kill them with success and bury them with a smile' ,'Always strive your best to ashame your enemies'),
  new Quote (5,'Stop looking for happiness the same place you lost it' ,'You sometimes have to move on with life'),
  new Quote (6,'you gotta have to dance like no one is watching,love like you will never be hurt,sing like no one is listeningand live like heaven is on earth' ,'Do everything to your perfection'),
  ];


  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  @Input() Quote: Quote;
  @Output()isComplete = new EventEmitter<boolean>();

  addNewQuote(quote){
    let quoteLength=this.quote.length;
    quote.id=quoteLength+1;
    quote.complete=(quote.complete)
    this.quote.push(quote)

  }
  quoteComplete(isComplete:boolean){
  this.isComplete.emit(isComplete);
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addUpvotes(i){
    this.quote[i].like +=1;
  }
  addDownvotes(i){
    this.quote[i].Dislike +=1;
  }

  


  constructor() { }

  ngOnInit() {
  }
}

