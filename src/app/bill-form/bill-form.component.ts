import { Bill } from './../bill';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {

  bill: Bill;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: BillServiceService) {
    this.bill = new Bill();
  }

  ngOnInit(){
  }

  onSubmit() {
    this.userService.save(this.bill).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/bills']);

  }
}
