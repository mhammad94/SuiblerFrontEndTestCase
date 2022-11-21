import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWritingComponent } from './book-writing.component';

describe('BookWritingComponent', () => {
  let component: BookWritingComponent;
  let fixture: ComponentFixture<BookWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookWritingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
