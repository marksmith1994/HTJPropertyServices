import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  clickEvent(){
    this.status = !this.status;       
  }
}
