import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>
  private userApi: string
  public currentUser: Observable<User>

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    this.userApi = `${environment.apiUrl}api/v1/users`
    this.currentUserSubject = new BehaviorSubject<User>(this.storage.getItem('currentUser'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  setCurrentUser(user: User) {
    this.currentUserSubject.next(user)
  }

  login() {}

  signup() {}

  logout() {}
}
