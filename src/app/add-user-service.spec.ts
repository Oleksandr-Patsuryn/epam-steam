import { TestBed } from '@angular/core/testing';
import {HttpClient} from "@angular/common/http";
import { AddUserService } from './add-user-service';

describe('AddUserServiceService', () => {
  let service: AddUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
