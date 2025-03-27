import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrarCitaPage } from './administrar-cita.page';

describe('AdministrarCitaPage', () => {
  let component: AdministrarCitaPage;
  let fixture: ComponentFixture<AdministrarCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
