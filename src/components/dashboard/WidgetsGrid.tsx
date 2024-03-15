'use client';

import { useAppSelector } from "@/store-redux";
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const counter = useAppSelector(state => state.counter.count);

    return (
        <div className="flex flex-wrap items-center justify-center p-2">
            <SimpleWidget
                title={counter.toLocaleString()}
                subTitle="Productos agregados"
                label="Contador"
                icon={<IoCartOutline size={70} className="text-blue-500" />}
                href="/dashboard/counter"
            />

            <SimpleWidget
                title={"Tarjeta sin data"} />
        </div>
    )
}
