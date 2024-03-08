import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesProductoComponent } from './pages-producto.component';

describe('PagesProductoComponent', () => {
  let component: PagesProductoComponent;
  let fixture: ComponentFixture<PagesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
