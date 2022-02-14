import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';   // importare questo modulo


@Component({
  selector: 'app-observable05',
  templateUrl: './observable05.component.html',
  styleUrls: ['./observable05.component.css']
})


export class Observable05Component implements OnInit {
  myObservable: Observable<number>;

  myObserver = {
    next: (x:number)   => { console.log('Observer5: ho ricevuto il dato: ' + x )},
    error:  (e:string) => { console.log('Observer5: ho ricevuto errore: '  + e )},
    complete: ()       => { console.log('Observer5: ho ricevuto complete bye'  )} 
  };


  makeSubscription(): void {

    this.myObservable = new Observable<number>(function (observer) {
      let i: number = 0;
      observer.next(i++); // 0
      observer.next(i++); // 1
      observer.next(i++); // 2
      //observer.complete();
      observer.error("numeri finiti");
      observer.next(i++); // questo non viene intercettato
    });

    this.myObservable.subscribe( this.myObserver );

  }

  constructor() { }
  ngOnInit() { }

}
