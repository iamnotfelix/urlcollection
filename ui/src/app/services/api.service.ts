import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token = this.authService.getToken();
  headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUrls(page: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/urls?userId=${this.authService.getUser()}&pageSize=${this.pageSize}&page=${page}`, this.httpOptions) as Observable<PagedResponse>;
  }

  getUrl(urlId: number): Observable<Url> {
    return this.http.get(`${this.baseUrl}/urls/${urlId}`, this.httpOptions) as Observable<Url>;
  }

  getUrlsByCategory(page: number, categoryId: number): Observable<PagedResponse> {
    return this.http.get(`${this.baseUrl}/urls/category?categoryId=${categoryId}&userId=${this.authService.getUser()}&pageSize=${this.pageSize}&page=${page}`, this.httpOptions) as Observable<PagedResponse>;
  }
  
  getCategories(): Observable<Category[]> {
    return this.http.get(`${this.baseUrl}/categories`, this.httpOptions) as Observable<Category[]>;
  }

  addUrl(url: AddUrlDto): Observable<AddUrlDto> {
    return this.http.post(`${this.baseUrl}/urls?userId=${this.authService.getUser()}`, url, this.httpOptions) as Observable<AddUrlDto>;
  }

  updateUrl(url: UpdateUrlDto): Observable<UpdateUrlDto> {
    return this.http.put(`${this.baseUrl}/urls`, url, this.httpOptions) as Observable<UpdateUrlDto>;
  }

  deleteurl(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/urls?urlId=${id}`, this.httpOptions) as Observable<any>;
  }
}
