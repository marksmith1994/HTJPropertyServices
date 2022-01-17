import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  	constructor(
		private titleService: Title, 
		private metaService: Meta) 
	{}

	ngOnInit() {
		this.titleService.setTitle("Home | HTJ Property Services, Bridgend, South Wales");
		this.metaService.addTags([
		  {name: 'keywords', content: 'Bathroom, Kitchen, Renovations, Plumbing, Tiling, General, Property, Developments, Services'},
		  {name: 'description', content: 'HTJ Property Services based in Bridgend- Kitchen, Bathroom Renovations, Plumbing, Tiling and general property developments in Bridgend, South Wales'},
		  {name: 'robots', content: 'index, follow'}
		]);
	}

}