import React, { cloneElement } from "react"
export default function name(props: any) {

    return (
        <div>
            {props.children.map((child: any, i: any) => {
                return cloneElement(child, { ...props, key: i })
            })}
        </div>
    )
}