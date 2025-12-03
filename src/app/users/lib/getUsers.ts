import { User, UsersDto } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
    const data = await fetch('https://dummyjson.com/users', {
        next: {
            revalidate: 60,
        }
    })
    const users = (await (data.json() as Promise<UsersDto>)).users;

    return users;
}