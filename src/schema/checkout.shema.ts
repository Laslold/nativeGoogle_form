import { z } from "zod";
export const PersonalInfoSchema = z.object({
  name: z.string().min(3),
  email: z.string().email({ message: "please correct email address" }),
});
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const DeliverySchema = z.object({
  city: z.string().min(3),
  postal_code: z.string().min(6),
  address: z.string(),
  shipping: z.enum(["free", "fast", "same_day"]),
});
export type DeliveryInfo = z.infer<typeof DeliverySchema>;
export const PaymentSchema = z.object({
  card_number: z.string().min(3),
  date: z.string(),
  code: z.string(),
  info: z.boolean(),
});
export type PaymentInfo = z.infer<typeof PaymentSchema>;
export const CheckoutInfoSchema =
  PersonalInfoSchema.merge(DeliverySchema).merge(PaymentSchema);
export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;
