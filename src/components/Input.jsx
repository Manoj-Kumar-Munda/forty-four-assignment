import { cn } from "../lib/utils";

const Input = ({ label, id, className, icon, ...props }) => {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={id} className="text-sm text-label">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                {icon && (
                    <span className="absolute left-3 text-neutral-400 pointer-events-none flex items-center">
                        {icon}
                    </span>
                )}
                <input
                    id={id}
                    className={cn(
                        "border border-neutral-200 rounded-lg py-1.5 focus:outline-none focus:ring-1 focus:ring-neutral-600 w-full",
                        icon ? "pl-9 pr-3" : "px-3",
                        className
                    )}
                    {...props}
                />
            </div>
        </div>
    );
};

export default Input;
