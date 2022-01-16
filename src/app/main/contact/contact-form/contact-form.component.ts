import { Component } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

	constructor(
		private formBuilder: FormBuilder,
		private recaptchaV3Service: ReCaptchaV3Service,
		private http: HttpClient
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
		
		let form = JSON.stringify(this.contactForm.value);
		console.log(form);
		if (this.contactForm.valid) {
			this.http.post("/sendEmail.php", form).subscribe();
		}
	}
}