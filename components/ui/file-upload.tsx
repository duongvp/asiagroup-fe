import * as React from "react";
import { CloudUpload, AlertCircle } from "lucide-react";

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    acceptedFormats?: string;
    selectedFile?: FileList | null;
    containerClassName?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
    ({
        className,
        label,
        error,
        hint = "Click to browse or drag and drop",
        acceptedFormats = "PDF, DOC, DOCX up to 10MB",
        selectedFile,
        containerClassName,
        id,
        ...props
    }, ref) => {
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

                <div
                    className={`relative group min-h-[140px] w-full rounded-xl border-2 border-dashed bg-background-light dark:bg-[#102210] flex flex-col items-center justify-center hover:border-primary transition-all p-6 text-center cursor-pointer ${error ? 'border-red-500 bg-red-50/5' : 'border-[#dbe6db] dark:border-[#2a3e2a]'
                        } ${className || ''}`}
                >
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        id={inputId}
                        ref={ref}
                        {...props}
                    />

                    {/* Icon changes color on error */}
                    <CloudUpload
                        className={`${error ? 'text-red-500' : 'text-[#618961]'} mb-2`}
                        size={32}
                    />

                    <div className="flex flex-col items-center">
                        {selectedFile && selectedFile.length > 0 ? (
                            <div className="animate-sweep">
                                <p className="text-sm font-bold text-[#618961] dark:text-white break-all px-4">
                                    {selectedFile[0].name}
                                </p>
                                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                                    {(selectedFile[0].size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className="text-sm font-bold text-[#618961] dark:text-white">
                                    {hint}
                                </p>
                                <p className="text-xs text-[#618961] mt-1">{acceptedFormats}</p>
                            </>
                        )}
                    </div>
                </div>

                {error && (
                    <span className="text-red-500 text-[11px] font-bold flex items-center gap-1">
                        <AlertCircle size={12} /> {error}
                    </span>
                )}
            </div>
        );
    }
);

FileUpload.displayName = "FileUpload";

export { FileUpload };
