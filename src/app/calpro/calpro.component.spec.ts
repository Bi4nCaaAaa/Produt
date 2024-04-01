import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalproComponent } from './calpro.component';

describe('CadprodComponent', () => {
  let component: CalproComponent;
  let fixture: ComponentFixture<CalproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
