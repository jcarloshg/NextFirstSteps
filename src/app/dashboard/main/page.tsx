import { WidgetsGrid } from "@/components";


export const metadata = {
    title: 'Amin dashboard',
    description: 'SEO Title',
};


export default function MainPage() {
    return (
        <div className="text-black">

            <h1 className="mt-2 text-3xl">Dahsboard</h1>
            <span className="text-xl">Info general</span>

            <WidgetsGrid />

        </div>
    );
}