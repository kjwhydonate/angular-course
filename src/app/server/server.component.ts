import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = Math.round(Math.random() * 10);
  serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
