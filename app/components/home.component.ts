import {Component, Directive} from '@angular/core';
import {FirstDirective} from "./directives/first.directive";
import {NameService} from "./services/name.service";



@Component({
  selector: 'home',
  templateUrl: './app/components/home.tpl.html',
  directives: [FirstDirective],
  providers: [NameService]
})

export class HomeComponent {

  public data: any;
  public name: string;

  constructor(private nameService: NameService) {

    this.nameService = nameService;
    nameService.stateChange.subscribe((data: string) => { this.name = data; console.log('Change made to name data!') });

  }

  /*changeData() {

    //change the data by calling a different API.
    this.data = null;
    this.nameService.getData('http://jsonplaceholder.typicode.com/albums');

  }*/


  changeName(evt: any) {
    console.log(evt.srcElement.value);
    this.nameService.setValue(evt.srcElement.value);

  }


}
