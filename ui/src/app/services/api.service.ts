import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUrlDto } from 'src/models/AddUrlDto';
import { Category } from 'src/models/Category';
import { PagedResponse } from 'src/models/PagedResponse';
import { UpdateUrlDto } from 'src/models/UpdateUrlDto';
import { Url } from 'src/models/Url';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/urlcollection/server';
  pageSize = 4;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUrls(page: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/getUrls.php?userId=${this.authService.getUser()}&page=${page}&pageSize=${this.pageSize}`) as Observable<PagedResponse>;
  }

  getUrl(urlId: number): Observable<Url> {
    return this.http.get(`${this.baseUrl}/getUrlById.php?id=${urlId}`) as Observable<Url>;
  }

  getUrlsByCategory(page: number, categoryId: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/getUrlsByCategory.php?userId=${this.authService.getUser()}&categoryId=${categoryId}&page=${page}`) as Observable<PagedResponse>;
  }
  
  getCategories(): Observable<Category[]> {
    return this.http.get(`${this.baseUrl}/getCategories.php`) as Observable<Category[]>;
  }

  addUrl(url: AddUrlDto): Observable<AddUrlDto> {
    return this.http.post(`${this.baseUrl}/addUrl.php?userId=${this.authService.getUser()}`, url) as Observable<AddUrlDto>;
  }

  updateUrl(url: UpdateUrlDto): Observable<UpdateUrlDto> {
    return this.http.put(`${this.baseUrl}/updateUrl.php`, url) as Observable<UpdateUrlDto>;
  }

  deleteurl(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteUrl.php?id=${id}`) as Observable<any>;
  }
}
