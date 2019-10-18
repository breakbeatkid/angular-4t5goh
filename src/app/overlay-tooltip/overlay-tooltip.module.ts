import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTooltipComponent } from './overlay-tooltip.component';
import { OverlayTooltipDirective } from './overlay-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    OverlayTooltipComponent,
    OverlayTooltipDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    OverlayTooltipComponent,
    OverlayTooltipDirective
  ],
  entryComponents: [OverlayTooltipComponent]
})
export class OverlayTooltipModule { }