import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export const createUserAccount = async (user: INewUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;
  } catch (err) {
    console.log(err);
    return err;
  }
};
