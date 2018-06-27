import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Observable,Subject,Subscription } from 'rxjs';

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

   }
   onClickSubmit(data) {
      this.email=data.emailid;
      this.myservice.setUrlHistoryObj(data.emailid);
   }
}
