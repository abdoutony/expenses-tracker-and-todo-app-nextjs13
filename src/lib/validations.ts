import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimus"),
});

export const transactionSchema = yup.object().shape({
  title: yup.string().required().min(5).max(20),
  type: yup.string().notOneOf([""], "You must select an option!"),
  amount: yup.number().typeError("must be a number").required().min(1),
});
