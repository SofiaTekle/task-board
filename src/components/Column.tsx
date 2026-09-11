import type {ReactNode} from "react";

type ColumnProps = {
    title: string;
    children: ReactNode;
}
const Column = ({ title, children }: ColumnProps) => {
    return (
        <section className="bg-stone-50 rounded-lg border border-stone-200 p-4 flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-stone-900 border-b border-stone-200 pb-2">
                {title}
            </h2>
            {children}
        </section>
    );
}
export default Column;