import * as React from "react";
import { AlertCircle } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, containerClassName, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className={`flex flex-col gap-2 ${containerClassName || ''}`}>
                {label && (
                    <label
                        className="text-sm font-bold text-[#111811] dark:text-white"
                        htmlFor={inputId}
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={`h-12 w-full rounded-lg border bg-white dark:bg-[#152615] px-4 text-[#111811] dark:text-white outline-none focus:border-primary transition-colors ${error ? 'border-red-500' : 'border-[#dbe6db] dark:border-[#2a3e2a]'
                        } ${className || ''}`}
                    id={inputId}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <span className="text-red-500 text-[11px] font-bold flex items-center gap-1">
                        <AlertCircle size={12} /> {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };
