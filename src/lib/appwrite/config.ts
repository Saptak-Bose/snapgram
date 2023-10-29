import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  projectId: "653e3cb960120332a78b",
  url: "https://cloud.appwrite.io/v1",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
