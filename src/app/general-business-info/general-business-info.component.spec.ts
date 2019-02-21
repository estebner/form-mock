import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBusinessInfoComponent } from './general-business-info.component';

describe('GeneralBusinessInfoComponent', () => {
  let component: GeneralBusinessInfoComponent;
  let fixture: ComponentFixture<GeneralBusinessInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralBusinessInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
