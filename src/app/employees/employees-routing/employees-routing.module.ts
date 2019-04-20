import { HomeComponent } from '../home/home.component'
import { CatalogComponent } from '../catalog/catalog.component'
import { SettingsComponent } from '../settings/settings.component'

import { EmployeesComponent } from './../employees.component'
import { NgModule, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				component: EmployeesComponent,
				children: [
					{
						path: '',
						component: HomeComponent
					},
					{
						path: 'catalog',
						component: CatalogComponent
					},
					{
						path: 'settings',
						component: SettingsComponent
					}
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})

export class EmployeesRoutingModule{}