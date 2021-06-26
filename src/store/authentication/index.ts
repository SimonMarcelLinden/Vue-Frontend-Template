import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { AuthenticationState } from '@/store/authentication/types';
import { RootState } from '@/store/types';
import { getCustomerHelper } from '@/helpers';

export const state: AuthenticationState = {
    customer: getCustomerHelper(),
    inFlight: false,
};

export const authentication: Module<AuthenticationState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};