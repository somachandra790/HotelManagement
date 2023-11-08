import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneformatPipe implements PipeTransform {

  transform(number: string , delimiter : string){
    let newNumber = "";
    let i;

    for(i=0;i<2;i++){
      newNumber = newNumber + number.substring(i*3,((i*3)+3+i)) + delimiter;
    }

    return newNumber + number.substr((i*3)+1);
  }

}
