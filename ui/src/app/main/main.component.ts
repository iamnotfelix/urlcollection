import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Url } from 'src/models/Url';
import { Category } from 'src/models/Category';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	title = 'Url Collection';

	urls?: Url[];
	totalPages?: number;
	pages?: number[];

	category?: number;

	constructor(private apiService: ApiService, private authService: AuthService) {}
	
	categories?: Category[];

	ngOnInit(): void {
		this.apiService.getCategories().subscribe(data => this.categories = data);
		this.changePage(1);
	}

	changePage(page: number) {
		if (!this.category || this.category == 0) {
			this.getAll(page)
		} else {
			this.getByCategory(page, this.category);
		}
	}

	changeView() {
		if (!this.category || this.category == 0) {
			this.getAll(1);
		} else {
			this.getByCategory(1, this.category);
		}
	}

	getAll(page: number) {
		this.apiService.getUrls(page).subscribe(data => { 
			this.urls = data.urls;
			this.totalPages = data.totalPages; 
			this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
		});
	}

	getByCategory(page: number, categoryId: number) {
		this.apiService.getUrlsByCategory(page, categoryId).subscribe(data => { 
			this.urls = data.urls;
			this.totalPages = data.totalPages; 
			this.pages = Array(this.totalPages).fill(0).map((_, i) => i + 1);
		});
	}

	logout() {
		this.authService.logout();
	}
}
