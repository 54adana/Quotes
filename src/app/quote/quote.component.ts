import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  quote:Quote [] = [
  new Quote (1, 'get yourself a me coz im lit', 'fgiuyfuhiooihuyfy'),
  new Quote (2,'life has no limitations except the ones you make','kjx zbholdh haieof o'),
  new Quote (3,'Never be intimidated by what you do not know' ,'kjdfhazdsyultba'),
  new Quote (4,'kill them with success and bury them with a smile' ,'hgf,IHAWERVBGci, MJcvblwbuf '),
  new Quote (5,'Stop looking for happiness the same place you lost it' ,'hulrvzewtbhi.gjwewns'),
  new Quote (6,'you gotta have to dance like no one is watching,love like you will never be hurt,sing like no one is listeningand live like heaven is on earth' ,'ugeilsbgvehnjpl'),
  ];


  constructor() { }

  ngOnInit() {
  }
}

