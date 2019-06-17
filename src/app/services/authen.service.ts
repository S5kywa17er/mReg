import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthenService {

    // key in local storage ที่จะเก็บ token
    private accessKey = 'authToken';

    // กำหนดค่า access token ใน local storage
    setAuthenticated(accessToken: string): void {
        localStorage.setItem(this.accessKey, accessToken);
    }

    // ดึงค่า token ใน local storage
    getAuthenticated(): string {
        return localStorage.getItem(this.accessKey);
    }

    // clear ค่า token ใน local storage
    clearAuthenticated(): void {
        localStorage.removeItem(this.accessKey);
    }

}
