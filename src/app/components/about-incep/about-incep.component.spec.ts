import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIncepComponent } from './about-incep.component';

describe('AboutIncepComponent', () => {
  let component: AboutIncepComponent;
  let fixture: ComponentFixture<AboutIncepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutIncepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIncepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
