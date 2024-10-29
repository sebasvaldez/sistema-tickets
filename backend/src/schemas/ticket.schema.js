import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }),
  description: z
    .string({
      required_error: "La descripcion es requerida",
    })
    .min(10, {
      message: "La descripcion debe tener al menos 10 caracteres",
    }),
});


