interface InputFieldConfig {
  label: string;
  name: string;
  type: string;
  required: boolean;
  placeholder: string;
}

export const userInput: InputFieldConfig[] = [
  {
    label: "First Name",
    name: "fName",
    type: "text",
    required: true,
    placeholder: "Harry",
  },
  {
    label: "Last Name",
    name: "lName",
    type: "text",
    required: true,
    placeholder: "Potter",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "harry@potter.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    placeholder: "******************",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: true,
    placeholder: "******************",
  },
];
export const loginInput: InputFieldConfig[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "harry@potter.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    placeholder: "******************",
  },
];
