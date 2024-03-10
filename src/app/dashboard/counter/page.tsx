import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
    title: 'Counter Page',
    description: 'Counter Page - Description',
};

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">

            <span>Productos en el carrtio</span>

            <CartCounter value={20} />

        </div>
    );
}