import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() tableConfig: Array<any> = [];
  @Input() packages: Array<any> = [];
  @Input() loading: boolean = false;
  constructor() { }

  ngOnInit(): void { }

}
