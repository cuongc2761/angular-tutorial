import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-life-cycle',
  templateUrl: './test-life-cycle.component.html',
  styleUrls: ['./test-life-cycle.component.scss']
})
export class TestLifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
