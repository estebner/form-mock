import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonInfoComponent } from './contact-person-info.component';

describe('ContactPersonInfoComponent', () => {
  let component: ContactPersonInfoComponent;
  let fixture: ComponentFixture<ContactPersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
