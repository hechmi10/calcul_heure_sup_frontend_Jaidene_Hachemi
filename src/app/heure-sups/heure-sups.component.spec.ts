import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureSupsComponent } from './heure-sups.component';

describe('HeureSupsComponent', () => {
  let component: HeureSupsComponent;
  let fixture: ComponentFixture<HeureSupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeureSupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeureSupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
