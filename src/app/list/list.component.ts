import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // shoes;
  constructor() { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  ngOnInit() {
  }
  shoes: typesOfShoes[]=[
    {id:1,name:'bread'},{id:2,name:'juice'}
    ]
}

export class typesOfShoes{
id:number
name:string
}