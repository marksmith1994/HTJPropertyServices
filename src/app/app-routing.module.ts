import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { CustomStrategy } from './shared/service/custom-strategy.service';

const routes: Routes = [
	{
		path: '',
		data: { preload: true },
		component: HomeComponent
	},
	{
		path: 'about',
		data: { preload: true },
		component: AboutComponent
	},
	{
		path: 'gallery',
		data: { preload: true },
		component: GalleryComponent
	},
	{
		path: 'contact',
		data: { preload: true },
		component: ContactComponent
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
