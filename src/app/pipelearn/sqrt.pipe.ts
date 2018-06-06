import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sqrt'
})
export class Sqrt implements PipeTransform {
    transform(value: number): any {
        return Math.sqrt(value);

    }
}