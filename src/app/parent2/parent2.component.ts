import { Component, OnInit, ViewChild, AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
})
export class Parent2Component implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @ViewChild('title')
  title: ElementRef;
  @ViewChild('firstName') firstName:ElementRef

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.title.nativeElement);
  }

getFirstName(){
    console.log("from parent"+this.firstName);
}
}
