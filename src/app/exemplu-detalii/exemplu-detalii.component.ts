import { Component, OnInit, Input } from '@angular/core';
import { Programare } from '../programare';

@Component({
  selector: 'app-exemplu-detalii',
  templateUrl: './exemplu-detalii.component.html',
  styleUrls: ['./exemplu-detalii.component.css']
})
export class ExempluDetaliiComponent implements OnInit {
  ngOnInit(): void {
   
  }
  
  @Input() programare? : Programare;
          
 
}
