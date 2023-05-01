"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";


export default function Animal ({ animal }) {

    const router = useRouter();
    const [isFetching, setIsFetching] = useState(false);

    const handleChange = () => {
        setIsFetching(true)
        console.log("You clicked!!!")




        setIsFetching(false)
    }

    return (
        <li className={`border p-4 mb-4 ${isFetching ? "opacity-30" : "opacity-100"}`}>
            <p>{animal.name}</p>
            <label htmlFor={animal.name}>Is adopted</label>
            <input 
                type="checkbox" 
                name={animal.name} 
                id={animal.name}
                checked={animal.adopted}
                onChange={handleChange}
            />
        </li>
    )
}