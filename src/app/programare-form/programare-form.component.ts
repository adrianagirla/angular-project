import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { ProgramariService } from '../programari.service';

@Component({
  selector: 'app-programare-form',
  templateUrl: './programare-form.component.html',
  styleUrls: ['./programare-form.component.css']
})
export class ProgramareFormComponent implements OnInit {
   date!: NgbDateStruct;
   time: NgbTimeStruct = {
    hour: 10, minute: 30,
    second: 0
  };
  constructor(private programareService: ProgramariService) { }

  save(programare: any){
    this.programareService.addProgramare(programare)
    console.log(programare)
  }

  ngOnInit(): void {
  }

}
