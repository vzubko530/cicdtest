import { User } from "../types/user";

export const getUserById = async (id: number): Promise<User> => {
    const data = await fetch(`https://dummyjson.com/users/${id}`)
    const user = await data.json();

    return user;
}