export const validation = (value) => {
  let errors = {};
  if (!value.name) {
    errors.name = "name is required";
  }
  if (!value.number) {
    errors.number = "mobile no is required";
  }
  if (!value.email) {
    errors.email = "email is required";
  }
  if (!value.password) {
    errors.password = "password is required";
  }

  return errors;
};
export default validation;
