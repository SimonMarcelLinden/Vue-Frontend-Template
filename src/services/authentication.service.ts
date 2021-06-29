/* eslint-disable */
import { Response } from '@/models/response.model';
import { Customer } from '@/models/customer.model';
import config from './_config';
import axios from 'axios';

export const AuthenticationService = {
    login,
    logout,
};

/**
 * @description löst einen call an das Backend aus welcher den Login triggert.
 * @param email
 * @param password
 * @return Promise<Customer>
 */
function login(email: string, password: string): Promise<Customer> {

    return axios.post(`${config.apiUrl}/auth/login`, { email, password })
        .then(handleResponse)
        .then((response: Response<Customer>) => {

            const user: Customer = new Customer(response.data);
            localStorage.setItem('user', JSON.stringify(user));

            if (user.token) {
                axios.defaults.headers.common.Authorization = user.token;
            }

            return user;
        });
}

/**
 * @description entfernt den User aus dem State.
 */
function logout() {
    localStorage.removeItem('user');
    delete axios.defaults.headers.common.Authorization;
}

function handleResponse(response: any) {
    return response.data;
}
