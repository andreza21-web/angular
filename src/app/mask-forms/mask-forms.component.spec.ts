import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskFormsComponent } from './mask-forms.component';

describe('MaskFormsComponent', () => {
  let component: MaskFormsComponent;
  let fixture: ComponentFixture<MaskFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
