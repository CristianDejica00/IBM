import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { Certificate } from "../models/certificate";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const certUrl = "http://localhost:8080/certificate";

@Injectable({
  providedIn: "root",
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }

  public addCertificate(certificate) {
    return this.http
      .post(`${certUrl}`, certificate, {
        responseType: "text" as "json",
      })
      .pipe(
        tap(() => console.log(`added certificate 2/ id: ${certificate.id}`)),
        catchError(this.handleError("addCertificate", []))
      );
  }

  public getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${certUrl}`).pipe(
      tap(() => console.log("fetched certificates")),
      catchError(this.handleError("getCertificate", []))
    );
  }

  public updateCertificate(id: string, cert: Certificate): Observable<any> {
    const url = `${certUrl}/${id}`;
    return this.http.put(url, cert, httpOptions).pipe(
      tap((_) => console.log(`updated certificate id=${id}`)),
      catchError(this.handleError<any>("updateCertificates"))
    );
  }

  public deleteCertificate(id: string): Observable<Certificate> {
    const url = `${certUrl}/${id}`;
    return this.http.delete<Certificate>(url, httpOptions).pipe(
      tap((_) => console.log(`deleted certificate id=${id}`)),
      catchError(this.handleError<Certificate>("deleteCertificate"))
    );
  }
}
