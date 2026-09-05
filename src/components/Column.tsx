import type {ReactNode} from "react";

type ColumnProps = {
    title: string;
    children: ReactNode;
}
const Column = ({ title, children }: ColumnProps) => {
    return <section className="bg-gray-100 rounded-lg p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">{title}</h2>
        {children}
    </section>
}
export default Column;