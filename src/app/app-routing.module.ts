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
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { ParentEComponent } from './parent-e/parent-e.component';



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
       {
        path: 'parent',
        component: ParentComponent
    },
       {
        path: 'parent2',
        component: Parent2Component
    },
       {
        path: 'parente',
        component: ParentEComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}