import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { Pacient } from './pacient';
import { Programare } from './programare'; 

@Injectable({
  providedIn: 'root'
})
export class ProgramariService {

  private programariUrl = 'http://localhost:3000/Programari';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }
  
  getProgramari(): Observable<Programare[]> {
    return this.http.get<Programare[]>(this.programariUrl)
        .pipe(
          tap(_ => this.log('fetched patients')),
          catchError(this.handleError<Programare[]>('getProgramari',[]))
        );
  }

  getProgramare(id: string): Observable<Programare>{
    const url = `${this.programariUrl}/${id}`;
    return this.http.get<Programare>(url).pipe(
      tap(_ =>this.log(`fetched programare id-${id}`)),
      catchError(this.handleError<Programare>(`getProgramare id=${id}`))
    );
  }

  addProgramare(programare: Programare): Observable<Programare> {
    return this.http.post<Programare>(this.programariUrl, programare, this.httpOptions).pipe(
      tap((newProgramare: Programare) => this.log(`added programare w/ id=${newProgramare.id}`)),
      catchError(this.handleError<Programare>('addProgramare'))
    );
  }
 
  updateProgramare(programare: Programare): Observable<any> {
    return this.http.put(this.programariUrl, programare, this.httpOptions)
    .pipe(tap(_ => this.log(`updated programare id=${programare.id}`)),
    catchError(this.handleError<any>('updateProgramare')));
  }

  deleteProgramare(id: number): Observable<Programare> {
    const url = `${this.programariUrl}/${id}`;
    return this.http.delete<Programare>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted programare id=${id}`)),
      catchError(this.handleError<Programare>('deleteProgramare'))
    );
  }


private handleError<T>(operation='operation', result? : T){
  return (error: any): Observable<T> =>{
    console.error(error);
    this.log(`${operation} failed: ${error.messages}`);
    return of(result as T);
  };
  
}

private log(message: string) {
  this.messageService.add(`ProgramariService: ${message}`);
}
}


