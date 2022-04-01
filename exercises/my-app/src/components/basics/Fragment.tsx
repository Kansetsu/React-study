import React from "react"

export default function Fragmento(props: any) {
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Inserir seus elementos sem uma <b>div</b> envolvendo eles</p>
        </React.Fragment>
    )
}

//Another possibility to do it below

// export default function Fragmento(props: any) {
//     return (
//         <>
//             <h2>Fragmento</h2>
//             <p>Inserir seus elementos sem uma div envolvendo eles</p>
//         </>
//     )
// }