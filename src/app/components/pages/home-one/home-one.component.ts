import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent {

  projects = [];

  model = {
    name: '',
    email: '',
    message: ''
  };
  
  isMessageSent = false;
  submitted = false;
  
  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { 
    this.projects = sharedDataService.getProjects();
  }

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'https://rdubphoto.github.io/Portfolio/src/assets/Robert-Wojtow-Resume.pdf';
    link.download = 'Robert-Wojtow_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
}
  
  onSubmit(contactForm: NgForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(this.model);
    this.http.post('https://formspree.io/f/meqbnrdd', this.model, { headers: headers }).subscribe(
       response => {
           console.log(response);
           this.submitted = true;
           this.showMessageForFewSeconds();
           contactForm.reset(); // This will reset the form
       },
       error => {
           console.error("There was an error sending the message.", error);
       }
    );
 }

  showMessageForFewSeconds() {
    this.isMessageSent = true;
    setTimeout(() => {
        this.isMessageSent = false;
    }, 5000);  // This will hide the message after 5 seconds.
  }

}
