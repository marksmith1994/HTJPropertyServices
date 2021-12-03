import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	loading: boolean = true;

	onActivate() {
		window.scroll(0, 0);
		this.loading = false;
	}

	title = 'HTJPropertyServices';
}
