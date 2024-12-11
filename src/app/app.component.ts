import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApplication';
  url = 'https://www.wsiz.edu.pl'
  message = 'Hello from the component class';

  buttonClicked() {
    //console.log("button clicked")
    this.message = 'The message was changed';
    this.url = 'https://angular.dev'
  }

  getValue(event: any) {
    return (event.target as HTMLInputElement).value;
  }
}
