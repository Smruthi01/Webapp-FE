import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytutorialComponent } from './buytutorial.component';

describe('BuytutorialComponent', () => {
  let component: BuytutorialComponent;
  let fixture: ComponentFixture<BuytutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuytutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuytutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
