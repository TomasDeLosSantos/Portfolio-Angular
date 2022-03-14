import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifComponent } from './qualif.component';

describe('QualifComponent', () => {
  let component: QualifComponent;
  let fixture: ComponentFixture<QualifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
