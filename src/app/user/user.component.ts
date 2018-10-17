import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: {
    id: number,
    name: string,
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          // console.log("sssss");
          this.user.id = params['id'];
          this.user.name = params['name'];
        }

      );
  }
}
