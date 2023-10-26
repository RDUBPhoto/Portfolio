import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  projects = [];

  constructor(private router: Router, private sharedDataService: SharedDataService) {
    this.projects = sharedDataService.getProjects();
    console.log(this.projects);
  }

  get isOnWorksDetailsPage(): boolean {
    const isOnPage = this.router.url.includes('works-details');
    return isOnPage;
  }
}
