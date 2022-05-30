import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramareDetaliuComponent } from './programare-detaliu.component';

describe('ProgramareDetaliuComponent', () => {
  let component: ProgramareDetaliuComponent;
  let fixture: ComponentFixture<ProgramareDetaliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramareDetaliuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramareDetaliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
