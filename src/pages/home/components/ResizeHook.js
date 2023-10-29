import { useEffect, useState } from "react";

export default function ResizeHook () {
    const [width, setWidth] = useState(0)
    useEffect(()=> {
        setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [])
    return width
}