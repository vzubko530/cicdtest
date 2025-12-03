export interface UsersDto {
    users: User[]
    total: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    crypto: Crypto;
}

interface Crypto {
    coin: string
}