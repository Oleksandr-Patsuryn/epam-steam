import { Injectable } from '@angular/core';

export interface User {
  email: string,
  password: string,
  username: string,
  friends: Array<number>,
  favoriteGames: Array<number>,
  id: number
}

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  setCookie(name: string, value: string, minutes: number) {
    let expires = '';
    if (minutes) {
      let date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
    console.log(document.cookie)
  }
  getCookie(name: string): string | null {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  clearCookie(name: string) {
    let date = new Date();
    date.setTime(date.getTime() + 1);
    let expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + '' + expires +'; path=/';
  }

  getUserCookie() {
    return JSON.parse(<string>this.getCookie('user_id')).id;
  }

  constructor() {}
}