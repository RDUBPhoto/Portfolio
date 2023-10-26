import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPortfolioComponent } from './navigation-portfolio.component';

describe('NavigationPortfolioComponent', () => {
  let component: NavigationPortfolioComponent;
  let fixture: ComponentFixture<NavigationPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationPortfolioComponent]
    });
    fixture = TestBed.createComponent(NavigationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
