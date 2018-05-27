import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  serverPort = "9999";
  serverUrl = 'http://localhost:'+this.serverPort+"/";
  saveUserUrl = 'api/save-user';
  saveEventUrl = 'api/save-event';
  deleteEventUrl = 'api/delete-event';
  updateEventUrl = 'api/update-event';
  
  constructor(private http: Http) {}
  
  /**
   * sauvegarder un nouveau utilisateur
   */
  saveUser(user) {
    return this.http.post(this.serverUrl+this.saveUserUrl, user).pipe(map((response: Response) => response.json()));
  }
    
  /**
   * sauvegarder un nouveau evenement
   */
  saveEvent(event){
    return this.http.post(this.serverUrl+this.saveEventUrl, event).pipe(map((response: Response) => response.json()));
  }
  
  
    
  
  
}
