import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private userRoleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public userRole$: Observable<string> = this.userRoleSubject.asObservable();

  constructor() { }

  setUserRole(role: string): void {
    this.userRoleSubject.next(role);
  }

  getUserRole(): string {
    return this.userRoleSubject.value;
  }
}
