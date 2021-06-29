/* eslint-disable */
import { MutationTree } from 'vuex';

import { AuthenticationState } from './types';
import { Customer } from '@/models/customer.model';

export const mutations: MutationTree<AuthenticationState> = {
    loginRequest(state: any) {
        state.inFlight = true;
    },
    loginFailure(state: any) {
        state.inFlight = false;
        state.user = null;
        state.token = null;
    },
    loginSuccess(state: any, user: Customer) {
        state.inFlight = false;
        state.user = user;
        state.token = user.token;
    },
    logoutSuccess(state: any) {
        state.inFlight = false;
        state.user = null;
        state.token = null;
    },
};
