import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function FooterJumbotron() {
    return (
        <>
            <div className="bg-blue h-80 grid items-center">
                <div className="justify-items-center">
                    <div className="bg-lime flex h-14 mt-2 self-center my-auto">
                        <h1 className="bg-blue text-white w-full ml-3 h-14 ">Terms And Conditions</h1>
                    </div>
                    <div>
                        Terms And Conditions
                    </div>
                </div>
            </div>
        </>
    );
}
