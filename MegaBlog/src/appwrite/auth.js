import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {     //class
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            if (userAccount) {
                //call another method
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite AuthService :: createAccount :: error", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({ email, password });
        } catch (error) {
            console.log("Appwrite AuthService :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite AuthService :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite AuthService :: logout :: error", error);
        }
    }
}

const authService = new AuthService();  //object

export default authService;  //exported as object