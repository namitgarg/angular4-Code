import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
})
export class ChildEComponent implements OnInit {
 message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
