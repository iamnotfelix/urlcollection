import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from 'src/models/Url';
import { UpdateUrlDto } from 'src/models/UpdateUrlDto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  id?: number;
  url?: string;
  description?: string;

  constructor (private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {};

  oldUrl?: Url;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get("id");
      if (this.id) {
        this.apiService.getUrl(this.id).subscribe((data: Url) => {
          this.url = data.url;
          this.description = data.description;
        });
      }
    })
  }

  updateUrl() {
    if (this.id && this.url && this.description)
		{
			const url: UpdateUrlDto = {
        id: this.id,
				url: this.url,
				description: this.description,
			}

			this.apiService.updateUrl(url).subscribe((response: any) => {
				this.router.navigateByUrl('/');
			}, (err) => {
				console.log(err);
			})
				
		}
  }
 
}
