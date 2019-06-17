import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient) { }

    private address: string = 'http://localhost/mobile/';
    // private address: string = 'http://27.254.204.138/mobile/';

    requestGet(url: string, accessToken?: string) {
        return this.http
            .get(`${this.address}${url}`, {
                headers: this.appendHeaders(accessToken)
            })
            .pipe(catchError(err => this.handelError(err)));
    }

    requestPost(url: string, body: any, accessToken?: string) {
        return this.http
            .post(`${this.address}${url}`, body, {
                headers: this.appendHeaders(accessToken)
            })
            .pipe(catchError(err => this.handelError(err)));
    }

    requestPut(url: string, body: any, accessToken?: string) {
        return this.http
            .put(`${this.address}${url}`, body, {
                headers: this.appendHeaders(accessToken)
            })
            .pipe(catchError(err => this.handelError(err)));
    }

    requestDelete(url: string, accessToken?: string) {
        return this.http
            .delete(`${this.address}${url}`, {
                headers: this.appendHeaders(accessToken)
            })
            .pipe(catchError(err => this.handelError(err)));
    }

    private handelError(errResponse: HttpErrorResponse): Observable<any> {
        errResponse['Message'] = errResponse.message;
        if (errResponse.error && errResponse.error.message) {
            errResponse['Message'] = errResponse.error.message;
        }
        throw errResponse;
    }

    private appendHeaders(accessToken) {
        const headers = {};
        if (accessToken) { headers['Authorization'] = `Bearer ${accessToken}`; }
        return new HttpHeaders(headers);
    }

}
