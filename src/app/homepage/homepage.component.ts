import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    
})
export class HomepageComponent implements OnInit {
    title = 'Angular 4 sProject!';
    todaydate;
    userName:string ='Namit Garg'
    constructor(private myservice: MyserviceService) {
    }
    ngOnInit() {
    }

}