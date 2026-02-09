import * as z from 'zod';

export const careerSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    cover_letter: z.string().optional(),
    resume: z.instanceof(FileList)
        .refine((files) => files?.length > 0, "Resume file is required")
        .refine((files) => files?.[0]?.size <= 10 * 1024 * 1024, "Max file size is 10MB")
});

export type CareerFormData = z.infer<typeof careerSchema>;