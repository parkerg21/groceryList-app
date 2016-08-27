import { Component } from '@angular/core';
import {ProductComponent} from "./product/product.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProductComponent]
})
export class AppComponent {
}
