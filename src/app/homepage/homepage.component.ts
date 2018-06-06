import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    title = 'Angular 4 Project!';
    todaydate;
    constructor(private myservice: MyserviceService) {}
    ngOnInit() {
        this.todaydate = this.myservice.showTodayDate();
    }

}