import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookImportComponent } from './book-import-component';

describe('BookImportComponent', () => {
  let component: BookImportComponent;
  let fixture: ComponentFixture<BookImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookImportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookImportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
