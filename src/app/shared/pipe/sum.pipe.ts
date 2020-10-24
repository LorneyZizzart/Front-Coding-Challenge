import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'add'
})
export class AddPipe implements PipeTransform{

    transform(value:number, num:number): number{
        return value + num;
    }
}