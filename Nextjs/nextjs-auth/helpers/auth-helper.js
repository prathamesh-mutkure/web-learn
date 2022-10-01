import { hash, compare } from "bcryptjs";

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
};

export const verify = async (password, hasedPassword) => {
  const isEqual = await compare(password, hasedPassword);

  return isEqual;
};
