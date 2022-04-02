import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 1;
  constructor() {
    console.log(`constructor - count is ${this.count}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - count is ${this.count}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - count is ${this.count}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addCount(): void {
    this.count += 10;
  }
  subtractCount(): void {
    this.count -= 10;
  }
}
