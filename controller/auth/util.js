import bcrypt from "bcryptjs";

export const hashPassword = async (password) => await bcrypt.hash(password, 10);

export const comparePassword = async (enteredPassword, userPassword) =>
  await bcrypt.compare(enteredPassword, userPassword);
