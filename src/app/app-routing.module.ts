import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Because we are using routing we need to define our pages as components
// Remember: Components are generated using `ng generate component comp_name`.
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { TosComponent} from './tos/tos.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent },        // Home Page
  { path : 'profile', component : ProfileComponent }, // User Profile Page
  { path : 'help', component : HelpComponent },       // Help Page
  { path : 'about', component : AboutComponent },     // About Page
  { path : 'tos', component : TosComponent },         // Terms of Service
  { path : 'disclaimer', component : DisclaimerComponent },  // Disclaimer Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
