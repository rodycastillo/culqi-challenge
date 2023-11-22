// import { defineRule } from "vee-validate";

// import { email, required, min, max } from "@vee-validate/rules";

// defineRule("email", (value: string) => {
//   if (email(value) && required(value)) {
//     return true;
//   }

//   return "A valid email address is required";
// });

// defineRule("password", (value: string) => {
//   if (
//     required(value) &&
//     min(value, { length: 6 }) &&
//     max(value, { length: 30 })
//   ) {
//     return true;
//   }

//   return "Password must be between 6 and 30 characters";
// });

const validEmail = (name: string) => {
  let validNamePattern = new RegExp(
    /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  );
  // let validNamePattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
};
