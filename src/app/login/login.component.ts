import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Observable,Subject,Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   email:string;
   constructor(private myservice: MyserviceService,private router:Router) { }
   ngOnInit() {

   }
   onClickSubmit(data) {
      this.email=data.emailid;
      this.myservice.setUrlHistoryObj(data.emailid);
      // programtically navigate to contact page
      this.router.navigate(['/contact']);
   }
}
