import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private apiService: ApiService, private router: Router,  private activatedRoute: ActivatedRoute) {}

  deleteUrl() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      const id = params.get("id");
      this.apiService.deleteurl(id).subscribe((response: any) => {
        this.router.navigateByUrl("/");
      }, (err) => {
        console.log(err);
      });
    });
  }
}
