import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeStr'
})
export class RemoveStrPipe implements PipeTransform{

    transform(item:string, value:string): string{
        return item.replace(value, '');
    }
}