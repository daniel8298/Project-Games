import { FieldValues, UseFormWatch } from "react-hook-form";

export interface SignInUpButtonInterface {
  text: string;
  isValid: boolean;
  watch: UseFormWatch<FieldValues>;
}
