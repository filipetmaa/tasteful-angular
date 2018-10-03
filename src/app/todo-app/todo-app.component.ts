import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';                            // add
import { Observable } from 'rxjs';                                      // add

import { Increment, Decrement } from '@state/counter/counter.actions';  // add
import { State } from '@state/counter/counter.state';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  count$: Observable<number>;
  
  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select('count'));
  }
  
  increment(){
    this.store.dispatch(new Increment());
  }
  
  decrement(){
    this.store.dispatch(new Decrement());
  }

  ngOnInit() {
  }

}
