import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-q',
  imports: [],
  templateUrl: './q.component.html',
  styleUrl: './q.component.css'
})
export class QComponent {

  @Input() data=""
  // ! => write now we dont need to proved initiall value, but after render the data will come then use !
  @ViewChild('inputBox') inputBoxVariable !:ElementRef

  constructor(){
    console.log("Consturctor Data =>", this.data);
  }

  // when Input & Ouput Value Work Done, the it run by default
  // write the name of function as same "ngOnInit"
  // send request to api fron OnInit now through consturctor
  // after adding component to webpage it bring data from api
  // internaly it call by angular
  ngOnInit(){
    console.log("OnInit Data =>", this.data);
  }

  // by default call on changes
  // changes:SimpleChange => add one default parameter ngOnChanges
  // triger when the data change
  // a is now b then it call, but not when a is a then it not call
  ngOnChanges(changes:SimpleChange){
    console.log("OnChanges Data Check =>", changes);
  }

  // to check a is a => same data call again and again at same time then the function is call
  ngDoCheck(){
    console.log("ngDoCheck Data Check");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Data Check");
  }

  // we can check in all above "this.inputBoxVariable", to access use "ngAfterViewInit"
  ngAfterViewInit(){
    console.log("ngAfterViewInit =>", this.inputBoxVariable);
    // console.log("ngAfterViewInit =>", this.inputBoxVariable.nativeElement); // to access input box
    this.inputBoxVariable.nativeElement.focus() // use this for, when you go on web page then the cursor already set in input box
    this.inputBoxVariable.nativeElement.value = "Username"
  }

  // component jab webpage se nikal jayega toh sab kuch destory ho jayega aur jaise hi aayega tab wait karega phir se destory karne ke liye
  // use for cleaning
  // use when hide and show example
  ngOnDestory(){
    console.log("Component Destroyed");
  }

}

// Calling Line By Line:

// ngDoCheck Data Check
// q.component.ts:13 Consturctor Data => 
// q.component.ts:30 OnChanges Data Check => {data: SimpleChange}
// q.component.ts:22 OnInit Data => Data From Parent
// q.component.ts:35 ngDoCheck Data Check
// q.component.ts:39 ngAfterContentInit Data Check
// q.component.ts:35 ngDoCheck Data Check
