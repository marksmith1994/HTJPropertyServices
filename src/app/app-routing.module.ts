import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './main/dashbaord/dashbaord.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomStrategy } from './shared/service/custom-strategy.service';

const routes: Routes = [
	{
		path: '',
		data: { preload: true },
		component: DashbaordComponent
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: CustomStrategy, relativeLinkResolution: 'legacy' })
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }
