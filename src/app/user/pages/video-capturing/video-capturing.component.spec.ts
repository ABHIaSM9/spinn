import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { VideoCapturingComponent } from './video-capturing.component';

describe('VideoCapturingComponent', () => {
  let component: VideoCapturingComponent;
  let fixture: ComponentFixture<VideoCapturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule,MatButtonModule],
      declarations: [ VideoCapturingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCapturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
