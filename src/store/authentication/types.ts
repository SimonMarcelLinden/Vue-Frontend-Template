import { Customer } from '@/models/customer.model';

export interface AuthenticationState {
    customer?: Customer;
    inFlight: boolean;
}
