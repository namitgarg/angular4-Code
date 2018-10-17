import { Component, OnInit,HostListener,HostBinding } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
     @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

@HostListener('mouseover') onHover() {
       
    this.color = "blue"
  
}
@HostListener('mouseleave') onLeave() {
    this.color="green";
}
@HostListener('click') onClick() {
    this.color="red";
}
  constructor() { }

  ngOnInit() {
  }

}
