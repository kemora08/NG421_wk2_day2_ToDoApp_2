import { Component, OnInit } from '@angular/core';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;

  constructor(private modalservice: NgbModal) {

  }
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false },

    ];
  }
  addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }
  async deleteTodo(todo: any) {
    const modal = this.modalservice.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    const answer = await modal.result;

      // a method to delete an item
    this.deleteTodo(todo: any); {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
    // tslint:disable-next-line: no-unused-expression
    type as button; = 'button' (click) = this.deleteTodo(todo); class= 'btn btn-danger btn-sm' > Delete < /button>;
  }

    if (answer === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }

  }

}
