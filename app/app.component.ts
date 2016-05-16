import {Component} from '@angular/core';
import {GlobalService} from "./components/services/global.service";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {HomeComponent} from "./components/home.component";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.tpl.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent, useAsDefault: true}
])

export class AppComponent {



}
