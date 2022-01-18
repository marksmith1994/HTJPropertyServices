import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InstagramArray } from '../models/main.model';
import { GalleryService } from '../services/gallery.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	title: string = "Gallery";
	images: InstagramArray | undefined;
	token: string = environment.gallery.tokenKey;
	loading: boolean = true;
    error: any = null;
	
	constructor(
		private _galleryService: GalleryService,
		private titleService: Title, 
		private metaService: Meta) {
		this.loading = true;
	}

	ngOnInit() {
		this.loading = false;
		this.titleService.setTitle("Gallery | HTJ Property Services, Bridgend, South Wales");
		this.metaService.addTags([
		  {name: 'keywords', content: 'Bathroom, Kitchen, Renovations, Plumbing, Tiling, General, Property, Developments, Services'},
		  {name: 'description', content: 'See the latest work from HTJ Property Services. Working in Bridgend South Wales, showing off the latest kitchens, bathrooms, plumbing tiling and more.'},
		  {name: 'robots', content: 'index, follow'},
		  {name: 'Content-Type', content: 'text/html; charset=utf-8' }
		]);
		
		this._galleryService.getInstagramGallery(this.token).subscribe({
			next: result => {
				this.images = result;
			}
		});
	}

}
