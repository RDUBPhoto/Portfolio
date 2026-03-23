import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryModule, Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { PROJECTS, Project } from '../../../data/projects-data';
import { ChatComponent } from '../../../components/chat/chat.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, GalleryModule, LightboxModule, ChatComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  galleryItems: GalleryItem[] = [];
  initialPrompt = '';

  constructor(private route: ActivatedRoute, private gallery: Gallery) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.project = PROJECTS.find(p => p.slug === slug);
    this.initialPrompt = this.route.snapshot.queryParamMap.get('q') ?? '';

    if (this.project) {
      this.galleryItems = this.project.images.map(img =>
        new ImageItem({ src: img, thumb: img })
      );

      this.gallery.ref('lightbox').load(this.galleryItems);
    }
  }
}
