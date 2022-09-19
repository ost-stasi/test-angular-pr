import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AddChart, ChangeChart } from 'src/store/actions/chart.action';
import { IAppState } from 'src/store/states/app.state';
import { ChartTypes } from 'src/enums/charttype.enun';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  chart_title: string = "";
  y_title: string = "";
  x_title: string = "";
  type:any = "";
  form_type:string = "add";
  id:any = -1;
  color: string = '';
  charttypes=ChartTypes;
  constructor(public activeModal: NgbActiveModal, private _store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  save_changes(){
    if(this.form_type == "add"){
      let chart_data = {
        type: this.type,
        chart_title: this.chart_title,
        x_title: this.x_title,
        y_title: this.y_title,
        color: this.color
      }
      this._store.dispatch(new AddChart(chart_data));
    }
    else{
      let chart_data = {
        id: this.id,
        type: this.type,
        chart_title: this.chart_title,
        x_title: this.x_title,
        y_title: this.y_title,
        color: this.color
      }
      this._store.dispatch(new ChangeChart(chart_data));
    }
    this.activeModal.close();
  }

}
