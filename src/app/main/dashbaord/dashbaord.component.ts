import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
	
    loading: boolean = true;
	home: boolean = false;
	about: boolean = false;
	gallery: boolean = false;
	contact: boolean = false;

    error: any = null;

    constructor() 
	{ 
		this.loading = true;
	}

    ngOnInit(): void {
		this.loading = false;
		this.home = true;
		
    }
}