import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

	
	//items = this.contactService.getItems();

	constructor(
		private contactService: ContactService,
		private formBuilder: FormBuilder,
	) {}

	checkoutForm = this.formBuilder.group({
		name: '',
		emailAddress: '',
		telephoneNumber: '',
		subject: '',
		message: ''  
	});

	onSubmit(): void {
		//this.items = this.cartService.clearCart();
		console.warn('Your order has been submitted', this.checkoutForm.value);
		this.checkoutForm.reset();
	  }

}