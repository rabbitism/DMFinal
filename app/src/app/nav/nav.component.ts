import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { QueryService } from '../_services/query.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any;
  
  @Input() cancelRegister = new EventEmitter();

  constructor(private queryService: QueryService) { }

  ngOnInit() {
  }

  query() {
    this.queryService.query(this.model).subscribe(next => {
      console.log('Successful');
    }, error => {
        console.log('Error');
    });
  }

}
