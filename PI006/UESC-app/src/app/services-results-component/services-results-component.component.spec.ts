import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesResultsComponentComponent } from './services-results-component.component';

describe('ServicesResultsComponentComponent', () => {
  let component: ServicesResultsComponentComponent;
  let fixture: ComponentFixture<ServicesResultsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesResultsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesResultsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
