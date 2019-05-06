import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatPage } from './wechat.page';

describe('WechatPage', () => {
  let component: WechatPage;
  let fixture: ComponentFixture<WechatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
