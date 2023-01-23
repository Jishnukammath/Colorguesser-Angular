import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorgussComponent } from './colorguss.component';

describe('ColorgussComponent', () => {
  let component: ColorgussComponent;
  let fixture: ComponentFixture<ColorgussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorgussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorgussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
