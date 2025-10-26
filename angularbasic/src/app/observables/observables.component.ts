import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, delay, filter, from, interval, map, mergeAll, Observable, of, retry, switchAll } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [NgFor],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

  data:any = [];
  observable = new Observable((obsever) => {
    setTimeout(() => {obsever.next(1)}, 1000);
    setTimeout(() => {obsever.next(2)}, 3000);
    setTimeout(() => {obsever.next(3)}, 4000);
    setTimeout(() => {obsever.next(4)}, 2000);

    // agar error run karega toh iske niche ke kuch bhi nhi chalega emit hoga toh bhi nhi chalega
    setTimeout(() => {obsever.error("Something Went Wrong!!")}, 6500); 

    // complete hon eke baad kitna bhi data emit hota hai voh nhi milega
    // agar 4 kaam karna hai 4 second mai, toh complete mai 5 second do pura kaam hone ke baad run hoga
    // agar 3 second, mai complete kar du toh 4 second wala emit complete nhi hoga matlab voh data fetch nhi hoga
    // setTimeout(() => {obsever.complete()}, 3000);
    setTimeout(() => {obsever.complete()}, 5000);
  });

  getData1(){
    this.observable.subscribe({

      next: (v) => {
        this.data.push(v);
      },

      complete: () => {alert("Data Retrieved Successfully")},

      error: (err) => {
        console.log(err);
      }

    })
  }

  // above Observable is manual, now we use auto
  getData2 (){
    let observable = of(4, 9, "A", 5.6, true)
    observable.subscribe({
      next: (v) => {this.data.push(v)},
      complete: () => {console.log("Data Retrieved Successfully");}
    })
  }

  getData3(){
    // form is a method => give iterable
    // from([12, 45]) or form("Hello")
    from('Hello') // one by one word emit 'H', 'e', 'l', 'l', 'o'
    .subscribe({
      next: (v) => this.data.push(v)
    })
  }

  getData4(){
    let subscribtion_obj = interval(1000)
    .subscribe({
      next: (v) => {this.data.push(v)}
    })

    setTimeout(() => {subscribtion_obj.unsubscribe()}, 10000) // after 10 second it stop or unsubscribe
  }

  // Pipe in Rxjs
  getData5(){
    of(1, 5, 8, 12, 89)
    .pipe(
      map(n => n * n),
      filter(n => n > 100)
    )
    .subscribe({
      next: (v) => {this.data.push(v)}
    })
  }

  getData6(){
    of(12, 56, 45, 100)
    .pipe(

      // this will subscript and give direct output dont return to subscribe it subscribe it
      // map((x) => of(x)),
      // mergeAll()

      // mergeMap() direct method
    )
    .subscribe({
      next: (v) => {this.data.push(v)}
    })
  }


  getData7(){
    of(12, 56, 23)
    .pipe(
      // operator of pipe
      // delay(2000) // delay for 2 second
      map(x => of(x).pipe(delay(2000))), // har ek Observable ko delay lagaya hai

      // use in search => "c" search for c in list, "ca" search data related "ca", so this help when you are searh but dont nned least step in this example c dont need when "ca" comes
      switchAll() // switchall mean to cancel all operation, show last element => of(12, 56, 23) => output: 23


    )
    .subscribe({
      next: (v) => {
        this.data.push(v)
      }
    })
  }

  // error handle
  getData8(){
    interval(2000)
    .pipe(
      map(x=> {
        if (x == 3){
          throw new Error("Something went wrong!!");
        }
        return x + 1
      }),
      retry(2), // at least try same code if success then okay, else run catch
      catchError((err) => {
        console.error("Error caught:", err.message);
        return of(23, 67, 34);
      })
    ).subscribe({
      next: (v) => this.data.push(v)
    })
  }

}
