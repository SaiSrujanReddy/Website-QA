import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { AuthLayoutComponent } from './common/auth-layout/auth-layout.component';

import { CONTENT_ROUTES } from './shared';
// import {PropertyWiseComponent} from './propertywise/pages/propertywise.component';

import { AuthGuard } from './guards/auth.guard';
// import { RoomwiseComponent } from './ratecard/pages/roomwise/roomwise.component';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/auth/login',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: AppLayoutComponent,
    // canActivate: [AuthGuard], // Should be replaced with actual auth guard
    children: CONTENT_ROUTES
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './auth/auth.module#AuthModule'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   loadChildren: './home/home.module#HomeModule'
  // },
  // {
  //   path: 'reports',
  //   // component: ReportsComponent,
  //   loadChildren: './reports/reports.module#ReportsModule'
  // },
  // {
  //   path: 'propertywise',
  //   // component: PropertywiseComponent,
  //   loadChildren: './propertywise/propertywise.module#PropertyWise'
  // },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule],
  providers: []
 })
export class AppRoutingModule { }
