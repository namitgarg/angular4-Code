import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    
})
export class HomepageComponent implements OnInit {
    title = 'my Project!';
    todaydate;
    userName:string ='Namit Garg'
    constructor(private myservice: MyserviceService) {
    }
    ngOnInit() {
    }
    changeTitle(){
        this.title="Changed title in Child Component Also";
        
    }

}