import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';


const routes: Routes = [
  { path: "", component: HomeComponent, data: {index: 0} },
  { path: "signup", component: SignupComponent, data: {index: 3} },
  { path: "login", component: LoginComponent, data: {index: 4} },
  { path: "phoneLogin", component: PhoneLoginComponent, data: {index: 5} },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
