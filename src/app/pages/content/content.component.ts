import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent {
	Id: string = '';
	Image: string = '';
	Title: string = '';
	Description: string = '';

	constructor(private route: ActivatedRoute) {}

	setValues(Id: string) {
		const data = dataFake.find((x) => x.id == Id);

		if (data != undefined) {
			this.Image = data?.image;
			this.Title = data?.title;
			this.Description = data?.description;
		}
	}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.Id = params['Id'];
		});

		this.setValues(this.Id);
	}
}
