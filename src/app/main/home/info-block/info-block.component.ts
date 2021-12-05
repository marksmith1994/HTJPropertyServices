import { Component, OnInit } from '@angular/core';
import { InfoBlock } from '../../models/main.model';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit{

	blocks: InfoBlock[] = []
	
	ngOnInit(){
		let blockOne = ({
			title: "Find out more",
			description: "About HTJ Property Services and see what makes us unique and perfect for any job you require. Check out our reviews and what makes us great!",
			image: "/assets/images/HTJ-Logo.svg",
			buttonText: "About us",
			buttonLink: "/about"
		});

		let blockTwo = ({
			title: "View our work",
			description: "Check out our latest work in our Gallery for inspiration - we have a broad range of experience doing all sorts of property services to a high standard. Click to see more examples of our expert craftsmanship.",
			image: "/assets/images/HTJ-Logo.svg",
			buttonText: "View gallery",
			buttonLink: "/gallery"
		});

		this.blocks.push(
			blockOne,
			blockTwo
		);
	}
}