import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'ory-material-home',
    templateUrl: './material-home.component.html',
    styleUrls: ['./material-home.component.scss']
})
export class MaterialHomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];

}
