import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
	
	images = [  
		{ 
			img: "/assets/images/slider/bathroom.jpg", 
			title: "HTJ Property Services", 
			content: "From tilling, contertops, installation and flooring. We will transform your old out of date kitchen to a beautiful new one." 
		}, 
		{ 
			img: "/assets/images/slider/kitchen.jpg", 
			title: "HTJ Property Services", 
			content: "From tiling to whole kitchen replacments, no job is to big or small." 
		}, 
		{ 
			img: "assets/images/slider/roof.jpg", 
			title: "HTJ Property Services", 
			content: "Fitting showers, baths, sinks and toilets. There is nothing we can't do! Get in touch today and we can fit your whole new bathroom." 
		}, 
		{ 
			img: "assets/images/slider/kitchen-2.jpg", 
			title: "HTJ Property Services", 
			content: "HTJ Property Services are dedicated to making your visions a reality. A locally run business from Bridgend, South Wales, HTJ Property Services cover all property needs from Tiling, Kitchens, Bathrooms and General building services. We aim to satisfy every one of our customers by being reliable and professional." 
		}
	];  
	  
	slideConfig = {  
		"slidesToShow": 1,  
		"slidesToScroll": 1,  
		"dots": false,  
		"infinite": true,
		"autoplay": true,
		"autoplaySpeed": 5000,
		"fade": true,
		"cssEase": 'ease-in-out',
		"touchThreshold": 100
	}; 

}