import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsCardComponent } from './talents-card.component';

describe('TalentsCardComponent', () => {
  let component: TalentsCardComponent;
  let fixture: ComponentFixture<TalentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
