import {Injectable, EventEmitter} from "@angular/core";
import {Http, Jsonp, Response, HTTP_PROVIDERS} from '@angular/http';
import {Observable}  from 'node_modules/rxjs/Observable.d';


@Injectable()
export class GlobalService {

  data: any;
  stateChange:EventEmitter<any> = new EventEmitter();
  name: string;

  url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
      this.name =  "Please enter a name!";
  }

  //store new data in data model.
  getData(url?: string) : any {
    this.http.get(url || this.url)
      .map((res: Response) => res.json())
      .subscribe(
        res => { this.data = res },
        error => { console.log(error) },
        () => this.stateChange.emit(this.data));
  }






}
