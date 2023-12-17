import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphasisComponentComponent } from './emphasis-component.component';

describe('EmphasisComponentComponent', () => {
  let component: EmphasisComponentComponent;
  let fixture: ComponentFixture<EmphasisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmphasisComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmphasisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
