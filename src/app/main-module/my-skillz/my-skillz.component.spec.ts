import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillzComponent } from './my-skillz.component';

describe('MySkillzComponent', () => {
  let component: MySkillzComponent;
  let fixture: ComponentFixture<MySkillzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillzComponent]
    });
    fixture = TestBed.createComponent(MySkillzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
