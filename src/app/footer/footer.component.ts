import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    private subscription: Subscription;

    constructor(private myservice: MyserviceService) {

    }

    ngOnInit() {
//        this.subscription = this.myservice.data$.subscribe(
//          (value) => {
//              console.log(value);
//          });
        
          this.subscription = this.myservice.data$.subscribe(
          
       //   value => console.log("namit",value),
          (value) => console.log('Observer got a complete notification'+value),
        );


    }
}
