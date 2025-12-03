import UsersList from "./components/UsersList";
import { getUsers } from "./lib/getUsers";

const FirstPage = async () => {
    const users = await getUsers();

    return(
        <div>
            <UsersList users={users} />
        </div>
    )
}

export default FirstPage;