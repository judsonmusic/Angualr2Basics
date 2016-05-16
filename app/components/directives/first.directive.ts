import {Component, Directive} from '@angular/core';
import {GlobalService} from "../services/global.service";
import {NameService} from "../services/name.service";

@Component({
  selector: 'firstDirective',
  templateUrl: 'app/components/directives/first-directive.tpl.html'
})
export class FirstDirective {

  data: string[];
  name: string;

  constructor(private globalService: GlobalService, private nameService: NameService) {


    this.globalService = globalService;
    globalService.stateChange.subscribe((value: any) => { this.name = value; console.log('Change made to global name!') });

    this.nameService = nameService;
    nameService.stateChange.subscribe((data: any) => { this.name = data; console.log('First directive detected change made to name data!') })


  }

  ngOnInit() {

  }

  changeName(evt:any){

    this.nameService.setValue(evt.srcElement.value);


  }


}
