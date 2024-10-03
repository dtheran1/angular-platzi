import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;

  @Input({required: true}) message: string = '';
  counter = signal(0);

  counterRef: number| undefined;
  constructor() {
    // BEFORE RENDER
    // NO ASYNC
    // UNA VEZ
    console.log('CounterComponent constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    // BEFORE AND DURING RENDER
    console.log('CounterComponent ngOnChanges');
    console.log('-'.repeat(10))
    console.log(changes);

    const duration = changes['duration'];
    console.log("🚀 ~ CounterComponent ~ ngOnChanges ~ duration:", duration)

    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }

    this.counterRef = window.setInterval(() => {
      this.counter.update((value) => value + 1);

      console.log('CounterComponent counter', this.counter());
    }, 1000);
  }

  ngOnInit() {
    // AFTER RENDER
    // ASYNC, then, subscribe, promise
    // UNA VEZ
    console.log('CounterComponent ngOnInit');
    console.log('-'.repeat(10))
  }

  ngAfterViewInit() {
    // AFTER RENDER
    // Para preguntar si los hijos de este componente fueron renderizados
    console.log('CounterComponent ngAfterViewInit');
    console.log('-'.repeat(10))
  }

  ngOnDestroy() {
    // BEFORE DESTROY
    // NO ASYNC
    // UNA VEZ
    console.log('CounterComponent ngOnDestroy');
    console.log('-'.repeat(10))

    window.clearInterval(
      this.counterRef
    );
  }

  doSomething() {
    console.log('change duration 👌');

    // async
  }


  //! Ciclo de vida de los componentes

  //* constructor
  //* ngOnChanges
  //* ngOnInit
  //* ngDoCheck
    //! ngAfterContentInit
    //! ngAfterContentChecked
    //! ngAfterViewInit
    //! ngAfterViewCheck
  //? ngOnDestroy
}
