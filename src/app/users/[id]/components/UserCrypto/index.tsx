'use client'
import { useState } from "react";

const UserCrypto = ({coin}: {coin: string}) => {
    const [isShown, setIsShown] = useState(false)

    return(
        <div>
            <button onClick={() => {setIsShown((prev) => !prev)}}>Show/Hide</button>
            {isShown ? <div>{coin}</div> : <></>}
        </div>
    )
}

export default UserCrypto;