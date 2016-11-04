import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'datatable-cmp',
	templateUrl: 'datatable.component.html',
    styleUrls: ['datatable.component.css']
})

export class DatatableComponent implements OnInit{
	@Input() column:any[];
	@Input() config: any;
	@Input() data: any[];
	@Output() delete = new EventEmitter();
	@Output() edit  = new EventEmitter();
	private n_items:number;
	private paginate:boolean;
	private filtros:boolean;
	constructor(){
	}
	ngOnInit(){
	}
	public doEdit(obj:any){
		this.edit.emit(obj)
	}
	public doDelete(obj:any){
		this.delete.emit(obj);
	}
}