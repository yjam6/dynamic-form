import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/material.module';
import { DynamicFormComponent } from './dynamic-form.component';


@NgModule({
    imports: [
        MaterialModule,
        MatInputModule
    ],
    exports: [DynamicFormComponent],
    declarations: [
        DynamicFormComponent
    ],

})
export class DynamicFormModule { }
