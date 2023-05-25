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
  baseUrl = 'http://localhost:5285/api';
  pageSize = 4;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUrls(page: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/urls?userId=${this.authService.getUser()}&pageSize=${this.pageSize}&page=${page}`) as Observable<PagedResponse>;
  }

  getUrl(urlId: number): Observable<Url> {
    return this.http.get(`${this.baseUrl}/urls/${urlId}`) as Observable<Url>;
  }

  getUrlsByCategory(page: number, categoryId: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/urls/category?categoryId=${categoryId}&userId=${this.authService.getUser()}&pageSize=${this.pageSize}&page=${page}`) as Observable<PagedResponse>;
  }
  
  getCategories(): Observable<Category[]> {
    return this.http.get(`${this.baseUrl}/categories`) as Observable<Category[]>;
  }

  addUrl(url: AddUrlDto): Observable<AddUrlDto> {
    return this.http.post(`${this.baseUrl}/urls?userId=${this.authService.getUser()}`, url) as Observable<AddUrlDto>;
  }

  updateUrl(url: UpdateUrlDto): Observable<UpdateUrlDto> {
    return this.http.put(`${this.baseUrl}/urls`, url) as Observable<UpdateUrlDto>;
  }

  deleteurl(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/urls?urlId=${id}`) as Observable<any>;
  }
}
