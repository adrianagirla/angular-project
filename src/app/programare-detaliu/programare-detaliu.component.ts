import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramariService } from '../programari.service';


@Component({
  selector: 'app-programare-detaliu',
  templateUrl: './programare-detaliu.component.html',
  styleUrls: ['./programare-detaliu.component.css']
})
export class ProgramareDetaliuComponent implements OnInit {
  programare:any;
  id: any;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private programariServices: ProgramariService) { 

    let id = this.route.snapshot.paramMap.get('id');
    if (id)  this.programariServices.getProgramare(id).subscribe (p => this.programare = p);
    }
  
  ngOnInit(): void {
     }
     
  save(programare: any){
      if (this.id) this.programariServices.updateProgramare(programare);
      else this.programariServices.addProgramare(programare);
      this.router.navigate(['/home'])
      console.log(programare)
    }
}
  


