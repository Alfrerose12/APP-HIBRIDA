import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprogramarCitaPage } from './reprogramar-cita.page';

describe('ReprogramarCitaPage', () => {
  let component: ReprogramarCitaPage;
  let fixture: ComponentFixture<ReprogramarCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprogramarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
