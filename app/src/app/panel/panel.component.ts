import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  cuisines: any;
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Accept', 'application/json');

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://3.214.193.124:5000/cuisines', { headers: this.headers}).subscribe(response => {
      this.cuisines = response;
    }, error => {
      console.log(error);
    });
  }

}
