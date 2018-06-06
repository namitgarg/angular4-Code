import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    userName: string;
    bio: string;
    company: string;
    constructor(private http: HttpClient) {
    }
    ngOnInit() {
        this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => {
            console.log(data);
            console.log(data[0]);
        });
        this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
            console.log(data);
            this.userName = data.login;
            this.bio = data.bio;
            this.company = data.company;
        },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                } else {
                    console.log("Server-side error occured.");
                }
            }
        );

    }

}
interface UserResponse {
    login: string;
    bio: string;
    company: string;
    events_url: string;
}

