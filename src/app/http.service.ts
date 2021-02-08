import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getUsers(): Observable<User[]> {
    return this.http.get('assets/users.json').pipe(map(data => {
      const usersList = data['userList"'];
      // tslint:disable-next-line:only-arrow-functions
      return usersList.map(function(user: any) {
        return {name: user.userName, age: user.userAge};
      });
    }));
  }
}
