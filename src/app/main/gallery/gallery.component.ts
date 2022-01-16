import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InstagramArray } from '../models/main.model';
import { GalleryService } from '../services/gallery.service';

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
	
	constructor(private _galleryService: GalleryService) {
		this.loading = true;
	}

	ngOnInit() {
		this.loading = false;
		this._galleryService.getInstagramGallery(this.token).subscribe({
			next: result => {
				this.images = result;
			}
		});
	}

}
