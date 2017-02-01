import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule,
    	RouterModule, DropdownModule.forRoot()],
    declarations: [],
    exports: [CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
}
