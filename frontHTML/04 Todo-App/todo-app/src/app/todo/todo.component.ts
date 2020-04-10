import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  key: string = "data"

  todos: any = []
  input_placeholder: string

  constructor(public todoService: TodoService) { } //to inject a service

  ngOnInit(): void {
    this.writeInStorage(this.key, ["Spring","Hibernate","JPA","SpringBoot","Javascript","Angular"])
    this.todos = this.readFromStorage(this.key)
    // console.log(this.todos)
  }

  writeInStorage(key: string, value: string[]): void {
    this.todoService.writeInStorage(key, value)
  }

  readFromStorage(key: string): string[] {
    return this.todoService.readFromStorage(key)
  }

  onDelete(item: string): void {
    let index: number = this.readFromStorage(this.key).indexOf(item)
    this.todos = this.readFromStorage(this.key)
    this.todos.splice(index, 1)
    this.writeInStorage(this.key, this.todos)
  }

  onAdd(item: string): void {
    if(item !== ""){
      this.todos = this.readFromStorage(this.key)
      this.todos.unshift(item) //unshift is used to data to starting of the list
      this.writeInStorage(this.key, this.todos)
    }
  }
//for clearing the text from input field after its been added to list
  clear(): void {
    this.input_placeholder = ""
  }

}
