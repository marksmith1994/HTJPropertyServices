import { Component, OnInit } from '@angular/core';
import { InstagramArray, InstagramImages } from '../models/main.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	images: InstagramArray | undefined;
	token: string = '';
	constructor(
		private _galleryService: GalleryService
	) {
	}

	ngOnInit() {
		this._galleryService.getInstagramGallery(this.token).subscribe({
			next: result => {
				this.images = result;
			}
		})
	}

}
