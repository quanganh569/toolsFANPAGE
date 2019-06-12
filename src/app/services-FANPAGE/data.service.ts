import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { likeIndex } from './model-FANPAGE/likeINDEX';
import { shareIndex } from './model-FANPAGE/shareINDEX';
import { reviewIndex } from './model-FANPAGE/reviewINDEX';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Link API cho chiến dịch LIKE
  linkLikeApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/like';
  linkUpdateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/like/';
  linkCreateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/like';
  // Link API cho chiến dịch REVIEW
  linkReviewGetApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/review';
  linkReviewCreateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/review';
  linkReviewUpdateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/';

  // Link API cho chiến dịch SHARE
  linkShareGetApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/share';
  linkShareCreateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/share';
  linkShareUpdateApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/share/';
  // API lấy dữ liệu biểu đồ cho DASHBOARD
  chartGetApi: string = 'https://5cebbeb877d47900143b8ddc.mockapi.io/api/chart';
  // API lấy dữ liệu web box cho DASHBOARD
  webBoxApi: string = 'https://5cf88dd5e3c79f001439ae93.mockapi.io/webbox/webbox';


  constructor(private _http: HttpClient) { }
// ----------LIKE CHIEN DICH------------------------
  getLike(): Observable<any> {
    return this._http.get(this.linkLikeApi);
  }
  updateLike (id: any, update: any) {
    return this._http.put<likeIndex>(`${this.linkUpdateApi}${id}`, update);
  }
  detailLike(id: string) {
    return this._http.get<likeIndex>(`${this.linkUpdateApi}${id}`);
  }
  createLike(create) {
    return this._http.post<likeIndex>(this.linkCreateApi, create);
  }

// ----------REVIEW CHIEN DICH------------------------
  getReview(): Observable<any> {
    return this._http.get(this.linkReviewGetApi);
  }
  createReview(create) {
    return this._http.post<reviewIndex>(this.linkReviewCreateApi, create);
  }
  updateReview(id: any, update: any) {
    return this._http.put<reviewIndex>(`${this.linkReviewUpdateApi}${id}`, update);
  }
  detailReview(id: string) {
    return this._http.get<reviewIndex>(`${this.linkReviewUpdateApi}${id}`);
  }


// --------SHARE CHIEN DICH----------------

  getShare(): Observable<any> {
    return this._http.get(this.linkShareGetApi);
  }
  createShare(create) {
    return this._http.post<shareIndex>(this.linkShareCreateApi, create);
  }
  updateShare(id: any, update: any) {
    return this._http.put<shareIndex>(`${this.linkShareUpdateApi}${id}`, update);
  }
  detailShare(id: string) {
    return this._http.get<shareIndex>(`${this.linkShareUpdateApi}${id}`);
  }



  getChartData(): Observable<any> {
    return this._http.get(this.chartGetApi);
  }
  getWebboxData(): Observable<any> {
    return this._http.get(this.webBoxApi);
  }
}
