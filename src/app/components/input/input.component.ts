import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addvalue } from 'src/app/statemanagement/counter.action';
import { counterState } from 'src/app/statemanagement/counter.state';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  constructor(private fb:FormBuilder, private store:Store<{counter:counterState}>){}
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      input:[]
    })
    
  }
  add(){
    let input=this.form.get('input')?.value
    this.store.dispatch(addvalue({value:+input}))

  }

}
