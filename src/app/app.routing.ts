import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ResidentialComponent } from './residential/residential.component';

import { ContentfulService } from './contentful.service';


import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '',             component: LandingComponent },
    { path: 'portfolio',     component: CommercialComponent },
    { path: 'residential',     component: ResidentialComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    // { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
