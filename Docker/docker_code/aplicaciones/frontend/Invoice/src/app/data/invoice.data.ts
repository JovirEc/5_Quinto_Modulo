import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    id: '001',
    company: {
        ruc: '1792285747001',
        name: 'Clear Minds Consultores',
        address: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: 'Iñaquito',
            code: 'N-57'
        }
    },
    customer: {
        id: '1714616123',
        name: 'Jovir',
        surname: 'Rodriguez',
        address: {
            city: 'Gye',
            principalStreet: 'Autopista Narcisa',
            secondaryStreet: 'Urb. Jardines',
            code: '2816'
        }
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: 'Rufles',
                price: 0.50,
                description: 'Las papas más sabrosonas',
                category: {
                    id: 'C001',
                    name: 'Snacks'
                }
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: 'Doritos',
                price: 0.60,
                description: 'De queso',
                category: {
                    id: 'C001',
                    name: 'Snacks'
                }
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: 'Cachitos',
                price: 0.30,
                description: 'Para Kchudos',
                category: {
                    id: 'C001',
                    name: 'Snacks'
                }
            },
            quantity: 100,
        },
    ]
}