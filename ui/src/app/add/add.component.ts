import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Category } from 'src/models/Category';
import { AddUrlDto } from 'src/models/AddUrlDto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  	url?: string;
	description?: string;
	category?: number;

	constructor(private apiService: ApiService, private router: Router) {}

	categories?: Category[];
	error?: string | null;

	ngOnInit(): void {
		this.apiService.getCategories().subscribe(data => this.categories = data);
	}

	addUrl() {
		this.error = null;

		if (this.url && this.description && this.category)
		{
			const url: AddUrlDto = {
				url: this.url,
				description: this.description,
				category: this.category
			}

			this.apiService.addUrl(url).subscribe((response: any) => {
				this.router.navigateByUrl('/');
			}, (err) => {
				console.log(err.error);
        		this.error = err.error;
			})	
		}
	}
}
