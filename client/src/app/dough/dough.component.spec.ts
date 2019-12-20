import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughComponent } from './dough.component';

describe('DoughComponent', () => {
  let component: DoughComponent;
  let fixture: ComponentFixture<DoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
