import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const MaterialComponent = [MatSlideToggleModule, MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule, MatTooltipModule, MatFormFieldModule, MatSelectModule, MatInputModule]


@NgModule({
  // declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
