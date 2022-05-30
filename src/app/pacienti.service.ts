import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pacient } from './pacient';
import { catchError, map, tap} from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class PacientiService {
  private pacientUrl = 'https://jsonplaceholder.typicode.com/users';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }
  
  getPacienti(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(this.pacientUrl)
        .pipe(
          tap(_ => this.log('fetched patients')),
          catchError(this.handleError<Pacient[]>('getPacienti',[]))
        );
  }

  getPacient(id: number): Observable<Pacient>{
    const url = `${this.pacientUrl}/${id}`;
    return this.http.get<Pacient>(url).pipe(
      tap(_ =>this.log(`fetched patient id-${id}`)),
      catchError(this.handleError<Pacient>(`getPatient id=${id}`))
    );
  }

 
  updatePacient(pacient: Pacient): Observable<any> {
    return this.http.put(this.pacientUrl, pacient, this.httpOptions)
    .pipe(tap(_ => this.log(`updated hero id=${pacient.id}`)),
    catchError(this.handleError<any>('updateHero')));
  }


private handleError<T>(operation='operation', result? : T){
  return (error: any): Observable<T> =>{
    console.error(error);
    this.log(`${operation} failed: ${error.messages}`);
    return of(result as T);
  };
  
}

private log(message: string) {
  this.messageService.add(`PacientService: ${message}`);
}
}

  

