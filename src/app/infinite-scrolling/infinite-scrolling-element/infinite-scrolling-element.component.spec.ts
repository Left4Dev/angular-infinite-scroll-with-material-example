import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollingElementComponent } from './infinite-scrolling-element.component';

describe('InfiniteScrollingElementComponent', () => {
  let component: InfiniteScrollingElementComponent;
  let fixture: ComponentFixture<InfiniteScrollingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollingElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
