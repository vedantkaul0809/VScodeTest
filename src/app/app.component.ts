import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BankingApp';
  constructor(private bnIdle: BnNgIdleService, private route: Router) { 
    this.bnIdle.startWatching(600).subscribe((result) => {
      if(result) {
          console.log("session expired");
          localStorage.clear();
          alert("Session expired, Please Login Again");
          this.route.navigate(['/sessionExpired']);
      }
    })
  }
}
