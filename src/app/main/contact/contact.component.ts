import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	email = new FormControl('', [Validators.required, Validators.email]);
  
  	constructor(
	  	private _contact: ContactService
	) { }

	ngOnInit() {
	}


	getErrorMessage() {
	  if (this.email.hasError('required')) {
		return 'You must enter a value';
	  }
  
	  return this.email.hasError('email') ? 'Not a valid email' : '';
	}
}
