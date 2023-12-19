"use client";
import React from "react";
import { TabsDemo } from "@/components/sidebar";
import { CardDemo } from "@/components/cards";
import NavBar from "@/components/navbar";
import { CenterBar } from "@/components/centerBar";
import { TableDemo } from "@/components/TableDemo";
import { PATIENTS, PATIENTS_HEADER } from "../components/data"
import { BottomBar } from '@/components/BottomBar';
import { CalendarDemo } from "@/components/appointmentPage";

export default function Home() {
  return (
    <div className="grid h-screen w-full grid-cols-[max-content_1fr] overflow text-white">
      <TabsDemo />
      <div className="body text-black  overflow-y-scroll ">
        <div className="sticky top-0  bg-gray-800 overflow-hidden">
          <NavBar />
        </div>
        <div className="flex mt-2 flex-col overflow-x-auto">
          <div className="grid  grid-cols-[1fr_max-content] gap-x-5">
            <div className="flex flex-col gap-y">
              <CardDemo />
              <div className="ml-3 mr-3">
                <CenterBar />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl ttable border-[3px] overflow-y-scroll h-[420px] p-2 m-2 ">
          <TableDemo data={PATIENTS} header={PATIENTS_HEADER} />
        </div>
        <div className="rounded-3xl p-3">
          < BottomBar />
        </div>
        <div className="rounded-3xl p-3">
        <CalendarDemo/>
        </div>
      </div>
    </div>
  );
}