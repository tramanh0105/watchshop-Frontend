import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbsComponent } from './warenkorbs.component';

describe('WarenkorbsComponent', () => {
  let component: WarenkorbsComponent;
  let fixture: ComponentFixture<WarenkorbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarenkorbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarenkorbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
