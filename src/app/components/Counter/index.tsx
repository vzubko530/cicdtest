'use client'


import { useAppSelector } from "@/store/store";

const Counter = () => {

    const count = useAppSelector(state => state.cart.items.length)


    return <div>
        Counter: {count}
    </div>
}

export default Counter;