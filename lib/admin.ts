import { auth } from "@clerk/nextjs";

const ADMIN_USER_ID = process.env.ADMIN_USER_ID as string;

export const isAdmin = () => {
  const { userId } = auth();

  return userId === ADMIN_USER_ID;
};
