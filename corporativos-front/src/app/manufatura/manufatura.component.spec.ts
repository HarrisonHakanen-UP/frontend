import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturaComponent } from './manufatura.component';

describe('ManufaturaComponent', () => {
  let component: ManufaturaComponent;
  let fixture: ComponentFixture<ManufaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
