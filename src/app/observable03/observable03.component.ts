// costruire un Observable

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';   // importare questo modulo


@Component({
  selector: 'app-observable03',
  templateUrl: './observable03.component.html',
  styleUrls: ['./observable03.component.css']
})
export class Observable03Component implements OnInit {

  myObservable: Observable<number>;

  makeSubscription(): void {

    this.myObservable = new Observable<number>(function (observer) {
      let i: number = 0;
      observer.next(i++); // 0
      observer.next(i++); // 1
      observer.next(i++); // 2
      //observer.complete();
      observer.next(i++); // questo non viene intercettato
    });

    this.myObservable.subscribe(
      (x:number) => { console.log('Observer3: ho ricevuto il dato: ' + x )}
    );
  }

  constructor() { }
  ngOnInit() { }


}
