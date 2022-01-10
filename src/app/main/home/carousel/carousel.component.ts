import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
	
	images = [  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
		{ img: "https://www.htjpropertyservices.co.uk/images/kitchen-4.jpeg" },  
	];  
	  
	slideConfig = {  
		"slidesToShow": 3,  
		"slidesToScroll": 3,  
		"dots": true,  
		"infinite": true  
	}; 

}