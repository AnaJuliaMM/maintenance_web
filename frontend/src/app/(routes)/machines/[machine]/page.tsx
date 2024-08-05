"use client";
import React from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { machineList } from "@/app/constants/machine";
import { MachineType } from "@/app/types/machine";

type Params = {
  machine: string
}

interface MachineDetailProps {
  params : Params;
}

export default function MachineDetail({ params }: MachineDetailProps) {
  const serialNumber = params.machine;
  const machine:MachineType  = machineList.filter((machine)=> machine.serialNumber === params.machine)[0]
  console.log(machine);
  

  return (
    <main className="flex flex-col">
      <h1 className="text-3xl pb-6 text-center">Dashboard {serialNumber}</h1>
      <h1 className="text-3xl pb-6 text-center">{machine.location} </h1>
    </main>
  );
}
