import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Test server 1', 'Test server 2'];
  // username = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverCreationStatus = 'Server was created!: ' + this.serverName;
  }

  // resetUsername() {
  //   this.username = '';
  // }
}
