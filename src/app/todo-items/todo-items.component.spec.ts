import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TodoItemsComponent } from './todo-items.component';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TodoItemsComponent', () => {
  let component: TodoItemsComponent;
  let fixture: ComponentFixture<TodoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [HttpClientTestingModule,ToastrModule.forRoot({
        positionClass :'toast-bottom-right'
      })]
    });
    fixture = TestBed.createComponent(TodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
