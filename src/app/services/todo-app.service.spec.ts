import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TodoAppService } from './todo-app.service';
import { JwtHelperService } from '@auth0/angular-jwt';

describe('TodoAppService', () => {
  let service: TodoAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
