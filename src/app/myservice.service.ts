import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MyserviceService {
    mydata: string = "";
    data1: Subject<any> = new Subject<any>();
    data$ = this.data1.asObservable();

    constructor() {}
    public setUrlHistoryObj(val: string): void {
        this.data1.next(val);
    }

    public getUrlHistoryObj(): string {
        return this.mydata;
    }
}
