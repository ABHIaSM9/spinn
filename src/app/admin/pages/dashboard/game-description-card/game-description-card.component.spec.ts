import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDescriptionCardComponent } from './game-description-card.component';

describe('GameDescriptionCardComponent', () => {
  let component: GameDescriptionCardComponent;
  let fixture: ComponentFixture<GameDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDescriptionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
