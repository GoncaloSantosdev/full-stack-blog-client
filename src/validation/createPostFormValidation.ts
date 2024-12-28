import { z } from "zod";

export const createPostFormValidation = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
});
