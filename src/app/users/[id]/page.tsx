import { getUserById } from "../lib/getUserById";
import { getUsers } from "../lib/getUsers";
import UserCrypto from "./components/UserCrypto";

export async function generateStaticParams() { 
    const users = await getUsers();

    return users.map((user) => ({
        id: user.id.toString()
    }));
}


const UserPage = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    

    const user = await getUserById(Number(id))

    return <div>
        User name: {user.firstName}
        <UserCrypto coin={user.crypto.coin} />
    </div>
}

export default UserPage;
