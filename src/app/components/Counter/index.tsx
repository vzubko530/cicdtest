'use client'

import { useAppSelector } from "@/store/store";

const Counter = () => {

    const count = useAppSelector(state => state.cart.items.length)


    return <div>
        {count}
    </div>
}

export default Counter;