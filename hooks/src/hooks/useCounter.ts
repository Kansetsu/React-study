import { useState } from "react";

export const useCounter = (initialValue: any = 100) => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return { inc, dec }

}