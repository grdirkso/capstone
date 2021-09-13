import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassTypes } from '../models/class-types.model';

@Injectable({
  providedIn: 'root'
})
export class ClassTypesService {

  classTypeUrl = 'http://127.0.0.1:8082/api/organizations';

  constructor(private http: HttpClient) { }

  getClassTypes(): Observable<ClassTypes[]> {
    return this.http.get<ClassTypes[]>(this.classTypeUrl);
  }
}
