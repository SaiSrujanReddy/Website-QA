import { Routes } from '@angular/router';
import { AuthModule} from '../../auth/auth.module';

export const CONTENT_ROUTES: Routes = [

  {
    path: '',
    loadChildren: '../../home/home.module#HomeModule',
  },
  {
    path: 'home',
    loadChildren: '../../home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: '../../home/home.module#HomeModule',
    // canActivate: [AuthGuard]
  },
  // ratecard component
  {
    path: '',
    loadChildren: '../../ratecard/ratecard.module#RateCardModule',
  },
  {
        path: 'roomwise',
        loadChildren: '../../ratecard/ratecard.module#RateCardModule',
      },
  {
    path: 'propertywise',
    loadChildren: '../../ratecard/ratecard.module#RateCardModule'
  },
  // crm component
  {
    path: '',
    loadChildren: '../../crm/crm.module#CrmModule'
  },
  {
    path: 'serviceticketlist',
    loadChildren: '../../crm/crm.module#CrmModule'
  },
  {
    path: 'raisecustomerticket',
    loadChildren: '../../crm/crm.module#CrmModule'
  }
];
