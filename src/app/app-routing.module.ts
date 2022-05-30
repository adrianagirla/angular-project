import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PacientiComponent } from './pacienti/pacienti.component';
import { ProgramareDetaliuComponent } from './programare-detaliu/programare-detaliu.component';
import { ProgramareFormComponent } from './programare-form/programare-form.component';
import { ProgramariComponent } from './programari/programari.component';

const routes: Routes = [  
    {path: 'home', component: HomeComponent},
    {path: 'pacienti', component: PacientiComponent},
    {path: 'programari', component: ProgramariComponent},
    {path: 'programari/:id', component: ProgramareDetaliuComponent},
    {path: 'programare-form', component: ProgramareFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
