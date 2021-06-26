import { Customer } from '@/models/customer.model';

/**
 *
 * @description Liefert den Customer aus dem State
 * @return Customer
 */
export function getCustomerHelper(): Customer {
    const customerStorage = localStorage.getItem('customer');

    if (!customerStorage) {
        return null;
    }

    const customer: Customer = JSON.parse(customerStorage);

    return customer as Customer;
}
