import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gohan',
  template: `
    <div class="gohanComp" style="justify-content: center; text-align: center;">
      <!-- <p>Gohan ahora puede usar el {{kamehamehaGohan}} <p> -->
      <button 
        type="button" 
        (click)="genkidamaAlerta(true)" class="btn btn-outline-info"
      >!Cupon!</button>
    </div>
  `,
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {
  @Input() kamehamehaGohan: string | undefined;
  @Output() energiaGohan = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  genkidamaAlerta(msg: boolean){
    this.energiaGohan.emit(msg)
    console.log(msg);
  }

}