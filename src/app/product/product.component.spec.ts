/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('Component: Product', () => {
  it('should create an instance', () => {
    let component = new ProductComponent();
    expect(component).toBeTruthy();
  });
});
