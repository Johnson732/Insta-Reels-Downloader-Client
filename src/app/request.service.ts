import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  getVideoSrc(userUrl:string):Observable<any>{
    //const url="http://localhost:3000/";

    const url="https://insta-reels-downloader-server.onrender.com";
    const params = new HttpParams().set('userUrl', userUrl);
    return this.http.get<any>(url,{params});
  }

  /*
  getPostSrc(userUrl:string):Observable<any>{
    const url="http://localhost:3000/post";
    const params = new HttpParams().set('userUrl', userUrl);
    return this.http.get<any>(url,{params});
  }
  */
}
