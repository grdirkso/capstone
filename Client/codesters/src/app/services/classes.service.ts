import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../models/classes.model';
import { Members } from '../models/members.model';

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

  getClassById(classId: string): Observable<Classes> {
    return this.http.get<Classes>(`${this.classUrl}/${classId}`)
  }

  addMember(classId: string, member: Members): Observable<Members> {
    return this.http.post<Members>(`${this.classUrl}/${classId}/members`, member);
  }

  addClass(c: Classes): Observable<Classes> {
    return this.http.post<Classes>(this.classUrl, c);
  }
}
