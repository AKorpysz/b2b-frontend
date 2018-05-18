import { Product } from '../shared/data/product';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        code: 'PROD1',
        name: 'Produkt 1',
        currency: 'PLN',
        price: '200.0',
        producer: 'Producent 1',
        unit: 'szt'
    },
    {
        id: 2,
        code: 'PROD2',
        name: 'Produkt 2',
        currency: 'USD',
        price: '200.0',
        producer: 'Producent 1',
        unit: 'paleta'
    },
    {
        id: 3,
        code: 'PROD3',
        name: 'Produkt 3',
        currency: 'PLN',
        price: '300.0',
        producer: 'Producent 2',
        unit: 'szt'
    },
    {
        id: 4,
        code: 'PROD4',
        name: 'Produkt 4',
        currency: 'PLN',
        price: 'tel.',
        producer: 'Producent 5',
        unit: 'szt'
    },
    {
        id: 5,
        code: 'PROD5',
        name: 'Produkt 5',
        currency: 'PLN',
        price: '1.0',
        producer: 'Producent 1',
        unit: 'opak'
    },
    {
        id: 6,
        code: 'PROD6',
        name: 'Produkt 6',
        currency: 'PLN',
        price: 'tel',
        producer: 'Producent 1',
        unit: 'szt'
    },
    {
        id: 7,
        code: 'PROD7',
        name: 'Produkt 7',
        currency: 'PLN',
        price: '1.0',
        producer: 'Producent 8',
        unit: 'opak'
    },
    {
        id: 8,
        code: 'PROD8',
        name: 'Produkt 8',
        currency: 'CHF',
        price: '20.0',
        producer: 'Producent 1',
        unit: 'szt'
    },
    {
        id: 9,
        code: 'PROD9',
        name: 'Produkt 9',
        currency: 'PLN',
        price: 'tel',
        producer: 'Producent 1',
        unit: 'szt'
    },
    {
        id: 10,
        code: 'PROD10',
        name: 'Produkt 10',
        currency: 'GPB',
        price: '1500.0',
        producer: 'Producent 1',
        unit: 'szt'
    },
];
@Injectable()
export class ProductsServiceMock {
    getProducts(filter = '', sortColumn = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 100): Observable<Product[]> {
        let result = PRODUCTS;
        if (filter && filter !== '') {
            result = result.filter(x => x.code === filter);
        }
        if (sortColumn && sortColumn !== '') {
            if (sortOrder === 'asc') {
                //TODO: przeciwiczyc funkcje sterujace
                result = result.sort((one, two) => (one.id - two.id));
            }
            else {
                //throw new Error('Sort desc');
                // wiem że to jest okropne. do wywalenia po refaktorze                
                result = result.reverse();
            }
        }
        //if(sortColumn && sortColumn !== '')
        return of(result.slice(pageNumber, pageNumber + pageSize));
    }

    getProduct(id: number) {
        return of(PRODUCTS.find(x => x.id === id));
    }   

    getPrompts(inputText: string): Array<string> {
        if (inputText !== null) {
          return ['Produkt 8', 'CHF'];
        }
        return new Array<string>();
      }
}


