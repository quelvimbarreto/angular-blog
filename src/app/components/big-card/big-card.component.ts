import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-big-card',
	templateUrl: './big-card.component.html',
	styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
	@Input() Id: string = '';
	@Input() Image: string = '';
	@Input() Date: string = '';
	@Input() Title: string = '';
	@Input() Description: string = '';

	constructor() {}

	ngOnInit(): void {}
}
