import Link from "next/link";
import { User } from "../../types/user";

import styles from './index.module.css'

const UsersList = ({users}: {users: User[]}) => {

    return(
        <div>
            {users.map((user) => {
                return(
                    <li className={styles.user} key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.firstName}
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}

export default UsersList;