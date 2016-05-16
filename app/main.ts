import {bootstrap}    from '@angular/platform-browser-dynamic';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {GlobalService} from './components/services/global.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    GlobalService
  ]
);
