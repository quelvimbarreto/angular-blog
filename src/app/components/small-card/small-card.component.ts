import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
	@Input() Id: string = '';
	@Input() Image: string = '';
	@Input() Title: string = '';
	@Input() Date: string = '';
}
