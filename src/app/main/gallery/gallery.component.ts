import { Component, OnInit } from '@angular/core';
import { InstagramArray, InstagramImages } from '../models/main.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	title: string = "Gallery";
	images: InstagramArray | undefined;
	token: string = 'IGQVJVenJ6S3hVeWtDWDl1aDl2NWdRMVZATdVFLdU9Qb3AtNnNkZAmV0bndvTmtkZAEdiTnZAqNVZA3VmllRExrUjlLU0V0enJ5UFhtUk5zRzloaGxGVThBYmNCQVdUQTBaS3JPWVNHb01zbXZA2ZAy1aYnlHMwZDZD';
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
