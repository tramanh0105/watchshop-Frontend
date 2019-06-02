import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbItemComponent } from './warenkorbItem.component';

describe('WarenkorbItemComponent', () => {
  let component: WarenkorbItemComponent;
  let fixture: ComponentFixture<WarenkorbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarenkorbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarenkorbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
