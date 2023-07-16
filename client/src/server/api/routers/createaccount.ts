import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";



export const CreateAccount = createTRPCRouter({
  createaccount: publicProcedure
    .input(z.object({ email: z.string(),password:z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.email} ${input.password}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
