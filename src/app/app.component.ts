import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
// data: Object = { shareOptions: ['Facebook', 'Twitter', 'Email'] };
  public mySentences= [
    { id: 1 },
    { id: 2},
    { id: 3 },
    { id: 4},
  ];
  clickme() {
    this.title = "Rina Singh";
  }
  showel(){
    //this.mySentences.push('youtube');
  }

}
export interface type {
  id: number;
  
}

