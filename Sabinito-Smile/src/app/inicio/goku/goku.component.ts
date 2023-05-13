import { Component } from '@angular/core';

@Component({
  selector: 'goku',
  template: `
  
  <h2 style="justify-content: center; text-align: center;">¿Buscas Ofertas Especiales?</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <gohan
            [kamehamehaGohan]="kamehamehaGoku" 
            (energiaGohan)="genkidamaLista($event)">
          </gohan>
          <h3 style="justify-content: center; text-align: center;"></h3>
          <img style="justify-content: center; text-align: center;" src="{{genkidamaImg}}" alt="">
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./goku.component.css']
})
export class GokuComponent {
  genkidama: boolean = false;
  genkidamaImg: string | undefined;
  kamehamehaGoku: string = "Soy Papa :D"

  constructor() { }

  genkidamaLista(confirmation: boolean){
    this.genkidama = confirmation;
    console.log(this.genkidama);

    //hacer genkidama si es true
    if(this.genkidama){
      this.genkidamaImg = 'https://cdn-icons-png.flaticon.com/512/2331/2331729.png?size=200px'
    }
  }

}