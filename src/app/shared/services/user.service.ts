import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { User } from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const userUrl = "http://localhost:8080/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${userUrl}`)
      .pipe(catchError(this.handleError("getUsers", [])));
  }
}
