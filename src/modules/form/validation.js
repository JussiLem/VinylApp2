import isEmail from "validator/lib/isEmail";

export const email = value =>
  value && !isEmail(value.trim()) ? "Invalid email" : null;

const isDirty = value => value || value === 0;

export const required = (requiredFields, values) =>
  requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: "Required" })
    }),
    {}
  );
