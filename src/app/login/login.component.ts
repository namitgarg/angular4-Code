import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   email:string;
   constructor(private myservice: MyserviceService) { }
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
   }
   onClickSubmit(data) {
      this.email=data.emailid;
   }

}
