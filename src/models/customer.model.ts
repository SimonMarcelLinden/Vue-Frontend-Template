export interface ICustomer {
    token: string;
    id: number;
    active: boolean;
    firstname: string;
    lastname: string;
    email: string;
    created_at: string;
    updated_at: string;
    email_verified_at: string;
}

export class Customer implements ICustomer {
    public token: string;
    public id: number;
    public active: boolean;
    public firstname: string;
    public lastname: string;
    public email: string;
    public created_at: string;
    public updated_at: string;
    public email_verified_at: string;

    constructor(options: {
        token?: string,
        id?: number,
        active?: boolean,
        firstname?: string,
        lastname?: string,
        email?: string,
        created_at?: string,
        updated_at?: string,
        email_verified_at?: string,
    } = {}) {
        this.token = options.token || '';
        this.id = options.id || null;
        this.active = !!options.active;
        this.firstname = options.firstname || '';
        this.lastname = options.lastname || '';
        this.email = options.email || '';
        this.created_at = options.created_at || '';
        this.updated_at = options.updated_at || '';
        this.email_verified_at = options.email_verified_at || '';

    }
}
