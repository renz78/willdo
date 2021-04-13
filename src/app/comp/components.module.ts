import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { BackbtnComponent } from "../comp/backbtn/backbtn.component";
import { ExpandableComponent } from "../comp/expandable/expandable.component";
import { ChaticonComponent } from "../comp/chaticon/chaticon.component";

@NgModule({
  imports: [],
  declarations: [BackbtnComponent, ExpandableComponent, ChaticonComponent],
  exports: [BackbtnComponent, ExpandableComponent, ChaticonComponent],
})
export class ComponentsModule {}
