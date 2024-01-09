"use client";
import React from "react";
import { TabsDemo } from "@/components/sidebar";
import { CardDemo } from "@/components/cards";
import NavBar from "@/components/navbar";
import { CenterBar } from "@/components/centerBar";
import { TableDemo } from "@/components/TableDemo";
import { PATIENTS, PATIENTS_HEADER } from "@/components/data"

export default function Home() {
    return (
       
       <>
                <div className="flex mt-2 flex-col mainT overflow-x-auto">
                    <div className="grid  grid-cols-[1fr_max-content] gap-x-5">
                        <div className="flex flex-col gap-y">
                            <CardDemo />
                            <div className="ml-7">
                                <CenterBar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl ttable mainT border ml-7  overflow-y-scroll h-[420px] p-2 mt-3 mr-6">
                    <TableDemo data={PATIENTS} header={PATIENTS_HEADER} />
                </div>
       </>
    );
}