import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazeComponent } from './amaze.component';

describe('AmazeComponent', () => {
  let component: AmazeComponent;
  let fixture: ComponentFixture<AmazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
