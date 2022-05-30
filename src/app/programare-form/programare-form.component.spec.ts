import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramareFormComponent } from './programare-form.component';

describe('ProgramareFormComponent', () => {
  let component: ProgramareFormComponent;
  let fixture: ComponentFixture<ProgramareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramareFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
