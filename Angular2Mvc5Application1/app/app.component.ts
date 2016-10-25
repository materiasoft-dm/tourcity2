import { Component } from '@angular/core';

export class WelcomeSection {
    Title: string;
    Description: string;
}


@Component({
    selector: 'my-app',
    template: `
  <div>Hello</div>
<div>{{welcome.Title}}</div>
<div>{{welcome.Description}}</div>
<div><input [(ngModel)]="welcome.Title" type='text' /></div>
<div><input [(ngModel)]="welcome.Description" type='text' /></div>
  `

})

export class AppComponent {
    title = 'welcome';
    welcome : WelcomeSection = {
        Title: 'sample title',
        Description: 'Sample description'
    };
}
