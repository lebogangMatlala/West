import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticleDesComponent } from './user-article-des.component';

describe('UserArticleDesComponent', () => {
  let component: UserArticleDesComponent;
  let fixture: ComponentFixture<UserArticleDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserArticleDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArticleDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
