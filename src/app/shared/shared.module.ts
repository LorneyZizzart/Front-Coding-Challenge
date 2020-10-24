import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationPipe } from './pipe/quotation.pipe';
import { AddPipe } from './pipe/sum.pipe';
import { RemoveStrPipe } from './pipe/removeString.pipe';


const THIRD_MODULES = [];
const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [];
const PIPES = [QuotationPipe, AddPipe, RemoveStrPipe];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ...PIPES,
  ],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class SharedModule {}
