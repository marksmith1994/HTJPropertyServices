import { Component, OnInit } from '@angular/core';
import { InfoBlock } from '../../models/main.model';

@Component({
  selector: 'app-picture-block',
  templateUrl: './picture-block.component.html',
  styleUrls: ['./picture-block.component.scss']
})
export class PictureBlockComponent implements OnInit {

	blocks: InfoBlock[] = []
	
	ngOnInit(){
		let blockOne = ({
			title: "Who we are",
			description: "We are a locally run business from Bridgend, South Wales. We are new and keen business ready to prove we can do any job you require. HTJ Property Services will go above and beyond to make your dreams a reality and help you achieve your dream home. Why not head over to our contact page and get in touch, get a quote or simply find out more about how HTJ Property Services will bring your ideas to life.",
			image: "/assets/images/about/htjps.jpg",
			buttonText: "Get in touch",
			buttonLink: "/contact"
		});

		let blockTwo = ({
			title: "What we do",
			description: "We pride ourselves on doing a complete job, with no job being too small. From tilling and countertops to kitchen and bathrooms fittings, we will do each and every job with complete professionalism. Click to see our latest work - for inspiration or just to see the high quality finish on each and every job!",
			image: "/assets/images/about/kitchen.jpg",
			buttonText: "Gallery",
			buttonLink: "/gallery"
		});

		this.blocks.push(
			blockOne,
			blockTwo
		);
	}
}