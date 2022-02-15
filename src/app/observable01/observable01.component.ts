import { Component, OnInit } from "@angular/core";
import { interval, Observable, Subscription, Observer, VirtualTimeScheduler } from "rxjs"; // importare questo modulo

@Component({
  selector: "app-observable01",
  templateUrl: "./observable01.component.html",
  styleUrls: ["./observable01.component.css"],
})


export class Observable01Component implements OnInit {
  counter1:number=0
  counter2:number=0
  mySubcription1:Subscription
  mySubcription2:Subscription

  myObservable1: Observable<number>;

  myObserver1 = {
    next: (x: number) => { 
      console.log("Observer1: ho ricevuto il dato: " + x)
      this.counter1=x
    },
    error: (err: string) => console.error("Observer1: ho ricevuto un errore: " + err),
    complete: () => console.log("Observer1: sequenza completata"),
  };
 


  constructor() {}

  ngOnInit() {
    this.myObservable1 = interval(1000)
  }

  onSubscribe1(){
    this.mySubcription1=this.myObservable1.subscribe(this.myObserver1);
  }

  onSubscribe2(){
    this.mySubcription2=this.myObservable1.subscribe(
      (x: number) => { 
        console.log("Observer2: ho ricevuto il dato: " + x)
        this.counter2=x
      }
    )
  }


  onUnsuscription1(){
    this.mySubcription1.unsubscribe()
  }

  onUnsuscription2(){
    this.mySubcription2.unsubscribe()
  }
}
