import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterState } from 'src/app/statemanagement/counter.state';

@Component({
  selector: 'app-countervalue',
  templateUrl: './countervalue.component.html',
  styleUrls: ['./countervalue.component.css']
})
export class CountervalueComponent implements OnInit{
  counter$!:Observable<counterState>
  constructor(private store:Store<{counter:counterState}>){}
  ngOnInit(): void {
   this.counter$=this.store.select('counter')
  }


}
