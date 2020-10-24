import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'quotation'
})
export class QuotationPipe implements PipeTransform{

    transform(value:string): string{
        var re1 = /&quot;/gi;
        var re2 = /&#039;/gi;
        var epsilon = /&epsilon;/gi;
        var pi = /&Phi;/gi;
        return value.replace(re1, '"').replace(re2, "'").replace(epsilon, "E").replace(pi, '*pi*');
    }
}