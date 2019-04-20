import { EmployeesRoutingModule } from './employees-routing/employees-routing.module'

import { HomeComponent } from './home/home.component'
import { CatalogComponent } from './catalog/catalog.component'
import { SettingsComponent } from './settings/settings.component'

import { EmployeesComponent } from './employees.component'

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
	imports: [
		CommonModule,
		EmployeesRoutingModule
	],
	declarations: [
		EmployeesComponent,
		HomeComponent,
		CatalogComponent,
		SettingsComponent
	],
	exports: [EmployeesComponent]
})

export class EmployeesModule{}