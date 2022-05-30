import { Component, OnInit } from '@angular/core';
import { PacientiService } from '../pacienti.service';
import { MessagesService } from '../messages.service';
import { DatePipe } from '@angular/common';
import { ProgramariService } from '../programari.service';
import { Router} from '@angular/router';
import { Programare } from '../programare';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined;
  selectedProgramare?: Programare;
  pacienti: any;
  programari: any;

  constructor(
    private pacientService: PacientiService,
    private programariService: ProgramariService,
    private messageService: MessagesService,
    private router: Router) { }

  ngOnInit(): void {
      this.getProgramari();
      this.todayWithPipe = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');
  }

  onSelect(programare: Programare): void {
    this.selectedProgramare = programare;
  }

  getProgramari(): void {
    this.programari = this.programariService.getProgramari();}


  }

  
  




