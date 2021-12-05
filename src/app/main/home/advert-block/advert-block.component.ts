import { Component, OnInit } from '@angular/core';
import { AdvertBlock } from '../../models/main.model';

@Component({
  selector: 'app-advert-block',
  templateUrl: './advert-block.component.html',
  styleUrls: ['./advert-block.component.scss']
})
export class AdvertBlockComponent implements OnInit {

	blocks: AdvertBlock[] = []

	ngOnInit(){
		let blockOne = ({
			title: "Bathrooms",
			description: "A bathroom should be more than just a necessity - a place to unwind and relax. HTJ Property Services aim to create a truly beautiful bathroom experience, leaving you refreshed and energised.",
			image: "/assets/images/HTJ-Logo.svg",
		});

		let blockTwo = ({
			title: "Kitchens",
			description: "Whether you need a whole new kitchen or fancy a new worktop, HTJ Property Services are the team for you. No Kitchen is too big for our team to fit.",
			image: "/assets/images/HTJ-Logo.svg",
		});

		let blockThree = ({
			title: "Flooring",
			description: "As the saying goes, start from the ground up. Whether its a new patio, or a wood floor for the lounge, helping you start and finish your dream project is what we aim to achieve at HTJ Property Services.",
			image: "/assets/images/HTJ-Logo.svg",
		});

		let blockFour = ({
			title: "Tiling & More",
			description: "Struggled to find someone to do a complete job in the past? HTJ Property Services pride ourselves with doing a complete job. From fitting whole kitchens and bathrooms, or just tiling your new shower. No job is too small.",
			image: "/assets/images/HTJ-Logo.svg",
		});

		this.blocks.push(
			blockOne,
			blockTwo,
			blockThree,
			blockFour
		);
	}
}
