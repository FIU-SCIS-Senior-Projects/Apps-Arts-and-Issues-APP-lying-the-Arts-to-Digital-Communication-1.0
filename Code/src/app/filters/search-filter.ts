import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'searchPerson',  
})  
  
export class SearchFilter implements PipeTransform {  
    transform(items: any[], text: string): any {  
        if (!items || !text) {  
            return items;  
        }  
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 || 
                   item.organization.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
                   item.network.toLowerCase().indexOf(text.toLowerCase()) !== -1 ||
                   item.city.toLowerCase().indexOf(text.toLowerCase()) !== -1
        });  
    }  
}  