interface Address {
    street: string;
    zip: number;
    country: string;
    suburb: string;
}
export interface Business {
    name: string;
    image: string;
    registered: boolean;
    reg_number?: string;
    category: string;
    services: string;
    address: string;
    operation: string;
    description: string;
    website: string;
    email: string;
    phone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    created_at: number;
}
