/* eslint-disable */
import { Pageable } from '@/models/pageable.model';
import { Response } from '@/models/response.model';
import { TableParams } from '@/models/table-params.model';
import { Customer } from '@/models/customer.model';
import axios from 'axios';
import config from './_config';

export const CustomerService = {
    create,
    list,
    remove,
    get,
    update,
};

/**
 * @description löst einen Call an das Backend aus welcher einen neuen Customer erstellt.
 * @param customer
 * @return Promise<Response<Customer>>
 */
function create(customer: any): Promise<Response<Customer>> {
    return axios.post(`${config.apiUrl}/customers`, customer)
        .then(handleResponse)
        .then((response: Response<Customer>) => {
            response.data = new Customer(response.data);
            return response;
        });
}

/**
 * @description löst einen Call an das Backend aus welcher einen Customer anhand seiner id löscht.
 * @param id
 * @return Promise<Response<any>>
 */
function remove(id: number): Promise<Response<any>> {
    return axios.delete(`${config.apiUrl}/customers/${id}`)
        .then(handleResponse);
}

/**
 * @description löst einen Call an das Backend aus welcher einen Customer anhand seiner id liefert.
 * @param id
 * @return Promise<Response<Customer>>
 */
function get(id: number): Promise<Response<Customer>> {
    return axios.get(`${config.apiUrl}/customers/${id}`)
        .then(handleResponse)
        .then((response: Response<Customer>) => {
            response.data = new Customer(response.data);
            return response;
        });
}

/**
 * @description löst einen Call an das Backend aus welcher einen Customer updated.
 * @param customer
 * @return Promise<Response<Customer>>
 */
function update(customer: Customer): Promise<Response<Customer>> {
    return axios.patch(`${config.apiUrl}/customers/${customer.id}`, customer)
        .then(handleResponse)
        .then((response: Response<Customer>) => {
            response.data = new Customer(response.data);
            return response;
        });
}

/**
 * @description löst einen Call an das Backend aus welcher alle Customer liefert.
 * @param params
 */
function list(params?: TableParams): Promise<Response<Pageable>> {

    return axios.get(
        `${config.apiUrl}/customers`,
        { params },
    )
        .then(handleResponse)
        .then(handleResponseWithPagination)
        .then((response: Response<Pageable>) => {

            const customers: Customer[] = response.data.content.map((customer: any) => {
                return new Customer(customer);
            });

            response.data.content = customers;

            return response;
        });
}

function handleResponse(response: any): Response<any> {
    return response.data;
}

function handleResponseWithPagination(response: Response<any>): Response<Pageable> {

    const pageable: Pageable = {
        content: response.data.data,
        meta: {
            from: parseInt(response.data.from, 10),
            to: parseInt(response.data.to, 10),
            totalElements: parseInt(response.data.total, 10),
            totalPages: parseInt(response.data.last_page, 10),
        },
        params: {
            page: parseInt(response.data.current_page, 10),
            size: parseInt(response.data.per_page, 10),
        },
    };

    return {
        code: response.code,
        detail: response.detail,
        localized: response.localized,
        data: pageable,
    };
}
