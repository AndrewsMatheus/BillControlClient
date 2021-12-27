import {  BillServiceService } from './../bill-service.service';
import { Bill } from './../bill';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  bills!: Bill[];

  constructor(private billService: BillServiceService) {
  }

  ngOnInit() {
    this.billService.findAll().subscribe(data => {
      this.bills = data;
    });
  }

}
