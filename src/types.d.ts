export type UserRole = 'user' | 'admin' | 'editor';

export interface UserInterface {
    name: string;
    email: string;
    role: UserRole;
    isActive: boolean;
}

export interface UserMutation extends UserInterface{
    id: string;
}

export interface CountryInterface {
    alpha3Code: string;
    name: string;
}

export interface CountryInfoInterface {
    name: string;
    capital: string;
    borders: string[];
    flag: string;
    population: number;
    subregion: string;
}