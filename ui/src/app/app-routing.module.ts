import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
	{ path: '', component: MainComponent, canActivate: [authGuard]},
	{ path: 'add', component: AddComponent, canActivate: [authGuard] },
	{ path: 'update/:id', component: UpdateComponent, canActivate: [authGuard] },
	{ path: 'delete/:id', component: DeleteComponent, canActivate: [authGuard] },
	{ path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
