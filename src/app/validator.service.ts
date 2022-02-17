import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  checkEmail(email:string) {
    if(email == undefined)
      return false;
    else
      return true;
  }
  checkPassword(password:string) {
  if(password == undefined)
    return false;
  else
    return true;
  }
}
