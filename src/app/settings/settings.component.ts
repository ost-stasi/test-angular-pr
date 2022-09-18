import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { DeleteChart } from 'src/store/actions/chart.action';
import { IAppState } from 'src/store/states/app.state';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  list_of_charts:any;

  constructor(private modalService: NgbModal, private _store: Store<IAppState>) { }

  ngOnInit(): void {
    const that = this;
    this._store.pipe(select(store=> store.chart.charts)).subscribe({
      next(data:any) {that.list_of_charts = data; console.log(data)},
      error(err: Error){console.error('Observer got an error: ' + err);}
    });
  }

  open_modal() {
    var active_modal = this.modalService.open(ModalComponent);
    active_modal.componentInstance.form_type = "add";
  }

  delete_chart(id:number){
    this._store.dispatch(new DeleteChart({id:id}));
  }

  edit_chart(id:number){
    var active_modal = this.modalService.open(ModalComponent);
    active_modal.componentInstance.form_type = "edit"; 
    active_modal.componentInstance.id = id;
  }

}
