import { Component } from '@angular/core';
import { FormBuilder, NgForm  } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

	constructor(
		private contactService: ContactService,
		private formBuilder: FormBuilder,
		private recaptchaV3Service: ReCaptchaV3Service
	) {}

	contactForm = this.formBuilder.group({
		name: '',
		emailAddress: '',
		telephoneNumber: '',
		subject: '',
		message: ''  
	});

	onSubmit() {
		if (this.contactForm.invalid) {
			for (const control of Object.keys(this.contactForm.controls)) {
				this.contactForm.controls[control].markAsTouched();
			}
			return;
		}
	
		this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
		 	console.debug(`Token [${token}] generated`);
		});
		
		this.contactService.PostMessage(this.contactForm.value).subscribe(
		response => {
			location.href = 'https://mailthis.to/confirm'
			console.log("hello " + response)
			this.contactForm.reset();
		}, error => {
			console.warn(error.responseText)
			console.log("error" + { error })
		})
	}

}