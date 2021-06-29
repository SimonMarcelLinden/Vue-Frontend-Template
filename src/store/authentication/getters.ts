/* eslint-disable */
import { GetterTree } from 'vuex';
import { AuthenticationState } from '@/store/authentication/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<AuthenticationState, RootState> = {
    isAuthenticated: (state: any) => {
        return !!state.customer;
    },
    userToken: (state: any) => {
        // return state.customer.token;
        return !!state.customer ? state.customer.token : '';
    },
};
