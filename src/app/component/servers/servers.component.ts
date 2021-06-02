import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';



@Component({
  selector: 'app-servers',
  //selector by attribute. Use <div app-servers></div>
  //selector: '[app-servers]',
  //selector by class. Use <div class="app-servers"></div>
  //selector: '.app-servers',
  
  templateUrl: './servers.component.html',
  //inline template
  // template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'Test'
  serverCreated = false;
  username = '';

  servers = ['TestServer', 'TestServer2'];

  constructor() {
  
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }

  onCreateServer(){
    this.serverCreationStatus = 'Server Created, name: ' + this.serverName;
    this.serverCreated = true;
  }

  /*
  onUpdateUsername(event: Event) {
    console.log ("username: [" + this.username + "]");
    this.username = (<HTMLInputElement>event.target).value.trim();
  }
  */
  
  isUsernameValid () {
    const isValid = 
      (typeof this.username!='undefined' && this.username)
      &&
      this.username.trim().length > 0
    return isValid;
  }

  onUpdateServerName(event: Event){
    //console.log(event); 
    //this.serverName = (event.target as HTMLInputElement).value;
    this.serverName = (<HTMLInputElement>event.target).value.trim();
  }



  ngOnInit(): void {
  }

}
