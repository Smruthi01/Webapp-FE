import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';



 const getTutorials= 'https://819k5exbp5.execute-api.us-east-1.amazonaws.com/demostage1'
 //'https://demo-smru-wt-webapp-lt.devops.coda.run/api/tutorials'
 

 // 'http://localhost:8080/api/tutorials'
 //'http://localhost:8080/api/tutorials'; //(from sample)

 

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {

    return this.http.get<Tutorial[]>(getTutorials); 

  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${getTutorials}/${id}`);
  }

  //add
  create(data: any): Observable<any> {
    return this.http.post(getTutorials, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${getTutorials}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${getTutorials}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(getTutorials);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${getTutorials}?title=${title}`);
  }

  // view(): Observable<Tutorial[]> {

  //   return this.http.get<Tutorial[]>("https://ambpboimb9.execute-api.us-east-1.amazonaws.com/stage1/api/view");

  // }

}
