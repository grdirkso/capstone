import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../models/classes.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  classUrl = 'http://127.0.0.1:8082/api/groups';

  constructor(
    private http: HttpClient
  ) { }

  getClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(this.classUrl);
  }
}
