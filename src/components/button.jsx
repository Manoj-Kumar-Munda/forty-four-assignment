import { cn } from "../lib/utils";

const Button = ({ onClick, className, children, ...props }) => {
    return (
        <button onClick={onClick} className={cn("px-4 text-white py-1.5 rounded-lg cursor-pointer transition-colors  text-sm font-semibold", className)} {...props}>
            {children}
        </button>
    );
};
export default Button;