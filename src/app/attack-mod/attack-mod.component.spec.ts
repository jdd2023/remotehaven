import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackModComponent } from './attack-mod.component';

describe('AttackModComponent', () => {
  let component: AttackModComponent;
  let fixture: ComponentFixture<AttackModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
