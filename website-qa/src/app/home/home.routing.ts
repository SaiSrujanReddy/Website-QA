import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ConversationResolver } from './conversation-resolver.service';
import { HomeComponent } from './pages/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { AuthGuard} from '../guards/auth.guard';

import { from } from 'rxjs';
import { SalesComponent } from './pages/sales/sales.component';
import { CommunityComponent } from './pages/community/community.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DynamicpropertiesComponent} from './pages/dynamicproperties/dynamicproperties.component';
import { MapviewComponent } from './pages/mapview/mapview.component';
export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'home',
          component: HomeComponent,
         // canActivate: [AuthGuard]
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
          // canActivate: [AuthGuard]
        },
        {
          path: 'sales',
          component: SalesComponent,
         // canActivate: [AuthGuard]
        },
        {
          path: 'aboutus',
          component: AboutusComponent
        },
        {
          path: 'community',
          component: CommunityComponent
        },
        {
          path: 'signin',
          component: SigninComponent
        },
        {
          path: 'dynamiccards/:city/:area/:location/:lat/:lng/:rad',
          component: DynamicpropertiesComponent
        },
        {
          path: 'mapview',
          component: MapviewComponent
        },
        {
          path: '**',
          component: HomeComponent
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
