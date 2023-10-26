import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.scss']
})
export class WorksDetailsComponent implements OnInit {
  project: any;
  projects = [];

  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
  ) { 
    this.projects = sharedDataService.getProjects();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['projectId'];
      this.project = this.projects.find(p => p.id === projectId);
    });
  }

  isLinkableImage(imgSrc: string): boolean {
    return imgSrc === 'assets/img/works/user-experience-prototype-testing/video.jpg';
  }
  
}
