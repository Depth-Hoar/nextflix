import { verifyToken } from "../lib/utils.js";

export const redirectUser = async (context) => {
  const token = context.req ? context.req.cookies?.token : null;
  // console.log(token,"tokenasdfna");
  const userId = await verifyToken(token);

  return {
    userId,
    token,
  };
};