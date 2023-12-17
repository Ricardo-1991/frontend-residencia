import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNewsEmphasisComponentComponent } from './menu-news-emphasis-component.component';

describe('MenuNewsEmphasisComponentComponent', () => {
  let component: MenuNewsEmphasisComponentComponent;
  let fixture: ComponentFixture<MenuNewsEmphasisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuNewsEmphasisComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuNewsEmphasisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
