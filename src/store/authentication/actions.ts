/* eslint-disable */
import { Response } from '@/models/response.model';
import { Customer } from '@/models/customer.model';
import { ActionTree } from 'vuex';
import { AuthenticationService } from '@/services';

import { AuthenticationState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<AuthenticationState, RootState> = {
    login({ dispatch, commit }: any, { email, password }: { email: string, password: string }) {

        return new Promise((resolve, reject) => {
            commit('loginRequest', { email });

            AuthenticationService.login(email, password)
                .then((response: Customer) => {
                    commit('loginSuccess', response);
                    // resolve();
                })
                .catch((error: Response<any>) => {
                    commit('loginFailure', error);

                    const errorNotification = {
                        type: 'ERROR',
                        title: 'Login fehlgeschlagen',
                    };

                    dispatch('notification/addError', errorNotification, { root: true });
                    reject();
                });
        });
    },
    logout({ commit }: any) {
        return new Promise((resolve) => {
            AuthenticationService.logout();
            commit('logoutSuccess');
            // resolve();
        });
    },
};
