import { NgModule } from '@angular/core';
import { BackbtnComponent } from "../comp/backbtn/backbtn.component";
import { ExpandableComponent } from "../comp/expandable/expandable.component";

@NgModule({
  imports: [],
  declarations: [BackbtnComponent, ExpandableComponent],
  exports: [BackbtnComponent, ExpandableComponent],
})
export class ComponentsModule {}
