import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => this.users = data);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked(): void {
  }

  showResults(): void {
    console.log(this.users);
  }
}
