import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './intrfaces/customer';
import { NewCustomer } from './intrfaces/new-customer';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customers:any[] , term: string):any[] {
    return customers.filter((customer:NewCustomer)=>customer.name.toLowerCase().includes(term.toLowerCase()))
  }

}
