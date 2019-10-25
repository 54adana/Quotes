import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
quotes:Quote = [
    {id:1, name:'Get yourself a me coz im lit'},
    {id:2,name:'life has no limitations except the ones you make'},
    {id:3,name:'Never be intimidated by what you do nnot know'},
    {id:4,name:'Kill them with success and bury them with a smile'},
    {id:5,name:'Stop looking for happiness the same place you lost it'},
    {id:6,name:'you gotta have to dance like no one is watching,love like you will never be hurt,sing like no one is listeningand live like heaven is on earth'},

];
}

