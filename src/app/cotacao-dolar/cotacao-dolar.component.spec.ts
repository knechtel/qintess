import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoDolarComponent } from './cotacao-dolar.component';

describe('CotacaoDolarComponent', () => {
  let component: CotacaoDolarComponent;
  let fixture: ComponentFixture<CotacaoDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacaoDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
