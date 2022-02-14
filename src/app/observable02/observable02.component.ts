import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';   // importare questo modulo


@Component({
  selector: 'app-observable02',
  templateUrl: './observable02.component.html',
  styleUrls: ['./observable02.component.css']
})
export class Observable02Component implements OnInit {

  myObservable: Observable<number>;
 
  myObserver = {
    next:       (x: number)   => console.log('Observer2: ho ricevuto il dato: ' + x),
    error:      (err: string) => console.error('Observer2: ho ricevuto un errore: ' + err),
    complete:   ()            => console.log('Observer2: ho ricevuto un complete. Bye'),
  };

  mySubscription: Subscription;

  makeSubscription(): void {

    //modo1
    // interval restituisce un oggetto Observable
    this.myObservable = interval(1000)
    // subcribe restituisce un oggetto Subscription
    this.mySubscription=this.myObservable.subscribe(this.myObserver);

    //modo2 (utilizzo una anonymous function)
    //this.myObservable = interval(1000)
    //this.mySubscription=this.myObservable.subscribe(
    //  (x: number) => console.log('Observer2bis: ho ricevuto il dato: ' + x)
    //);

    //modo3 (utilizzo una anonymous function)
    //this.myObservable = interval(1000)
    //this.mySubscription=this.myObservable.subscribe(
    //  (x: number) => console.log('Observer2bis: ho ricevuto il dato: ' + x)
    //);
    
    //modo4 : modo compatto
    //this.mySubscription=interval(1000).subscribe(this.myObserver);

  }
  
  makeUnSubscription(): void {
     this.mySubscription.unsubscribe()
  }

  constructor() { }
  ngOnInit() { }

}
