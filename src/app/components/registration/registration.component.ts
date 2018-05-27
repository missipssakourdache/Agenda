import {RestClientService} from '../../services/rest-client.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private restClientService: RestClientService) {}

  ngOnInit() { }

  onSaveUser = function(user) {
    
    console.log("on save");
    console.log(user);
    this.restClientService.saveUser(user)
      .subscribe(
        data => {
          alert(data.data);
        }, 
        error => this.errorMessage = error);
  }
}
