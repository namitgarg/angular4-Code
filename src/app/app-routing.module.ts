import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RoutelearnComponent} from './routelearn/routelearn.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ContactComponent} from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
     {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'client-testimonials',
        component: ClientTestimonialsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignupFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}