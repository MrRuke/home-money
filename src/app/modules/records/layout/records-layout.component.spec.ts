import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsLayoutComponent } from './records-layout.component';

describe('RecordsLayoutComponent', () => {
  let component: RecordsLayoutComponent;
  let fixture: ComponentFixture<RecordsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
