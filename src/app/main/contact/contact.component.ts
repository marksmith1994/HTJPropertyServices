import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	title: string = "Contact";

  	constructor(
		private titleService: Title, 
		private metaService: Meta) 
	{}

	ngOnInit() {
		this.titleService.setTitle("Contact | HTJ Property Services, Bridgend, South Wales");
		this.metaService.addTags([
		  {name: 'keywords', content: 'Bathroom, Kitchen, Renovations, Plumbing, Tiling, General, Property, Developments, Services'},
		  {name: 'description', content: 'HTJ Property Services, working in South Wales Bridgend, recently completed jobs including, kitchen fittings, bathroom fittings, plumbing, tiling. For all your bridgend Property Maintence needs.'},
		  {name: 'robots', content: 'index, follow'}
		]);
	}
}
