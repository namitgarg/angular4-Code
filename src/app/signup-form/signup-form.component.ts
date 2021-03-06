import {Component, OnInit, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from './../User';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
    //Property for the gender
    private gender: string[];
    //Property for the user
    private user: User
    
    // homeSignUpTitle is the Child component variable whose value is assigned in parent component template
    @Input() homeSignUpTitle: string;

    constructor() {}

    ngOnInit() {

        this.gender = ['Male', 'Female', 'Others'];
        //Create a new user object
        this.user = new User({
            email: "", password: {pwd: "", confirm_pwd: ""},
            gender: this.gender[0], terms: false
        });
    }

}
