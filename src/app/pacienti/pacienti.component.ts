import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.css'],
})
export class PacientiComponent implements OnInit {
  model!: NgbDateStruct;
  time: NgbTimeStruct = {
    hour: 10, minute: 30,
    second: 0
  };
 
  constructor() {
   
   
  }

  ngOnInit(): void {
  }

}
