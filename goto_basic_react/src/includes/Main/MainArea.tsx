import {Link, Route, Routes} from "react-router-dom";
import {useActionState, useCallback, useMemo, useState} from "react";
function Test() {

    const [se, setSe] = useState(0)
    const [change, setChange] = useState<number>(0)

    const Tester = useMemo(() => {return (<div>{change}</div>)}, [se])


    return (
        <>
                <button onClick={()=>setSe(se +1)}> se</button>
                <button onClick={()=>setChange(change +1)}> memo</button>
                {Tester}
        </>
    )
}


export default function MainArea() {

    return (
        <>
            <Test/>
        </>
    )
}