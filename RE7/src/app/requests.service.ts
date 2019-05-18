import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,  'X-AIO-Key': '0d716abb6d424e258688668d311d6002'})
};

@Injectable ()
export class RequestsService {

  constructor(private http:HttpClient) {}
  bodyObj = {
    'feed': {
      "description": "",
      "key": "is-locked",
      "license": null,
      "name": "is-locked",
    }
  };
  // Uses http.get() to load data from a single API endpoint
  getData() {
    return this.http.get('https://io.adafruit.com/api/v2/joshuasardinha/feeds ', httpOptions);
  }
  updateData(value) {
    return this.http.post('https://io.adafruit.com/api/v2/joshuasardinha/feeds/is-locked/data',
      {
        "value": value
      }, httpOptions)
  }
}
