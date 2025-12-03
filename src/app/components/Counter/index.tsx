'use client'

import { useAppSelector } from "@/store/store";

import styles from './index.module.css'

const Counter = () => {

    const count = useAppSelector(state => state.cart.items.length)


    return (<div className={styles.counter}>
        Counter: {count}
    </div>)
}

export default Counter;