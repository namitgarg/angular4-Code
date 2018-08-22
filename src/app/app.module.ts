import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { PipelearnComponent } from './pipelearn/pipelearn.component';
import { CapitalizePipe } from './capitalize.pipe'; // import our pipe here
import { Sqrt } from './pipelearn/sqrt.pipe';
import { RoutelearnComponent } from './routelearn/routelearn.component';
import { HeaderComponent } from './header/header.component'; // import our pipe here
import { AppRoutingModule } from './app-routing.module'; // call routing 
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { ParentEComponent } from './parent-e/parent-e.component';
import { ChildEComponent } from './child-e/child-e.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    PipelearnComponent,
    CapitalizePipe,
    Sqrt,
    RoutelearnComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainMenuComponent,
    HomepageComponent,
    ContactComponent,
    ProductsComponent,
    ClientTestimonialsComponent,
    LoginComponent,
    SignupFormComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Parent2Component,
    ParentEComponent,
    ChildEComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
