import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCombComponent } from './bread-comb.component';

describe('BreadCombComponent', () => {
  let component: BreadCombComponent;
  let fixture: ComponentFixture<BreadCombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
