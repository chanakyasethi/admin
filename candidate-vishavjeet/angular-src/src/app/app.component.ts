import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  offlineTime;
  onlineTime;
  public onlineOffline: boolean = navigator.onLine;
  constructor() {
    window.addEventListener('online', () => { this.onlineOffline = true });
    window.addEventListener('offline', () => { this.onlineOffline = false });

    if (this.onlineOffline === false) {
      this.offlineTime = new Date().getMinutes();
    } else if (this.onlineOffline === true) {
      this.onlineTime = new Date().getMinutes();
    };

    // console.log(this.offlineTime);
    // console.log(this.onlineTime);
  }

}
