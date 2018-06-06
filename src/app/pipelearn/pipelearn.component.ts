import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipelearn',
  templateUrl: './pipelearn.component.html',
  styleUrls: ['./pipelearn.component.css']
})
export class PipelearnComponent implements OnInit {
 title = 'Angular 4 Project!';
   todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor() { }

  ngOnInit() {
  }

}
