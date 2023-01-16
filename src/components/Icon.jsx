import { useState } from "react"

export default function Icon(props) {

    return <>
        <div className={`${props.color} flex flex-col items-center justify-center h-[100px] border rounded-xl w-[100px] self-center`}>
            <div className="w-max bg-gray-800 tracking-tightest flex self-center logo items-center justify-center border border-gray-800">
                <span className="tracking-wider text-md font-bold">Joshua Cooper</span>
            </div>
        </div>
    </>
};