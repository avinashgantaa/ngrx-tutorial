import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/statemanagement/counter.action';
import { counterState } from 'src/app/statemanagement/counter.state';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent {
  counter$!:Observable<number>
  constructor(private store:Store<{counter:counterState}>){}
  increment(){
    this.store.dispatch(increment())

  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

}
