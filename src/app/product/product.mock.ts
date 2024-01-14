export const productsList:Product[] = [
{id:1, name: 'Lavandina', price: 10, description: 'Botella de un litro'},
{id:2, name: 'Detergente', price: 5, description: 'Dura 120 lavados'},
{id:3, name: 'Limpia Vidrios', price: 7, description: 'Tus vidrios transparentes'},
{id:4, name: 'Jabon', price: 2},
{id:5, name: 'Crema', price: 8, description: 'Olor a frutas'},

]


export interface Product{
    id: number | string;
    name: string;
    price: number;
    description?: string;
}
