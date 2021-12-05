import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
	
    loading: boolean = true;

    error: any = null;

    constructor() 
	{ 
		this.loading = true;
	}

    ngOnInit(): void {
		this.loading = false;
    }
}