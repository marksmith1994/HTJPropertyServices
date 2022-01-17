import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  	title: string = "About us";

  	constructor(
		private titleService: Title, 
		private metaService: Meta) 
	{}

	ngOnInit() {
		this.titleService.setTitle("About | HTJ Property Services, Bridgend, South Wales");
		this.metaService.addTags([
		  {name: 'keywords', content: 'Bathroom, Kitchen, Renovations, Plumbing, Tiling, General, Property, Developments, Services'},
		  {name: 'description', content: 'HTJ Property Services, working in South Wales Bridgend, recently completed jobs including, kitchen fittings, bathroom fittings, plumbing, tiling. For all your bridgend Property Maintence needs.'},
		  {name: 'robots', content: 'index, follow'}
		]);
	}

}
