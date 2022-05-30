import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempluDetaliiComponent } from './exemplu-detalii.component';

describe('ExempluDetaliiComponent', () => {
  let component: ExempluDetaliiComponent;
  let fixture: ComponentFixture<ExempluDetaliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempluDetaliiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempluDetaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
