import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [CommonModule],
  exports: [HelloComponentComponent, TestComponent],
  declarations: [HelloComponentComponent, TestComponent],
})
export class BaseComponentsModule {}
