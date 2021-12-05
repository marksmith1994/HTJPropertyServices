import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstagramArray } from '../models/main.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})

export class GalleryService {

	constructor(
		private http: HttpClient
	) { }

	getInstagramGallery(authToken: string): Observable<InstagramArray>{
		return this.http.get<InstagramArray>(`https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${authToken}`)
	}
}
