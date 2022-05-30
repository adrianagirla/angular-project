import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramariService } from '../programari.service';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.component.html',
  styleUrls: ['./programari.component.css']
})
export class ProgramariComponent implements OnInit {
  programari: any;
  programare= {};
  id!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public programariService: ProgramariService) {
      
      let id = this.route.snapshot.paramMap.get('id');
      if (id)  this.programariService.getProgramare(id).subscribe (p => this.programare = p);
    }

  ngOnInit(): void {
      this.getProgramari();
    }

  getProgramari(): void {
    this.programari = this.programariService.getProgramari();
  }
  
  delete() {
    if (!confirm('Esti sigur ca vrei sa anulezi programarea?')) return;
      this.programariService.deleteProgramare(this.id);
      this.router.navigate(['/programari']);
    }  
  }


