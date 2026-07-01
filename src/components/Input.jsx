import { cn } from "../lib/utils";

const Input = ({ label, id, className, ...props }) => {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={id} className="text-sm text-label">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={cn(
                    "border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600",
                    className
                )}
                {...props}
            />
        </div>
    );
};

export default Input;
