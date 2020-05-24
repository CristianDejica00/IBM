import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Request } from "../models/request";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const reqUrl = "http://localhost:8080/request";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }

  getRequests(): Observable<Request[]> {
    return this.http
      .get<Request[]>(`${reqUrl}`)
      .pipe(catchError(this.handleError("getCases", [])));
  }

  addRequest(request, userId: string, certId: string) {
    return this.http.post(`${reqUrl}/${userId}/${certId}`, request, {
      responseType: "text" as "json",
    });
  }

  updateRequest(id: string, req: Request): Observable<any> {
    const url = `${reqUrl}/${id}`;
    return this.http
      .put(url, req, httpOptions)
      .pipe(catchError(this.handleError<any>("updateRequests")));
  }

  changeStatus(id: string, req: Request, status: string) {
    const url = `${reqUrl}/${id}/status=${status}`;
    return this.http
      .put(url, req, httpOptions)
      .pipe(catchError(this.handleError<any>("changed Status")));
  }

  deleteRequest(id: string): Observable<Request> {
    const url = `${reqUrl}/${id}`;
    return this.http
      .delete<Request>(url, httpOptions)
      .pipe(catchError(this.handleError<Request>("deleteRequest")));
  }
}
