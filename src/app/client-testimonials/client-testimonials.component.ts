import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { Subscription,Observable } from 'rxjs/';

@Component({
  selector: 'app-client-testimonials',
  templateUrl: './client-testimonials.component.html',
})
export class ClientTestimonialsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => {
                        console.log(data);
                        console.log(data[0]);
        });
  }
   message = 'Hola Namit!';

}
