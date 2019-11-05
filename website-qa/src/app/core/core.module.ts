import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AuthGuard } from './guards/auth.guard';
// import { NoAuthGuard } from './guards/no-auth.guard';


// import { TokenInterceptor } from './interceptors/token.interceptor';

// import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
    ]
})
export class CoreModule {
    constructor() {
    }
}
