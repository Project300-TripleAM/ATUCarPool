import { CognitoUserPool } from "amazon-cognito-identity-js";

export interface UserData {
    Username: string;
    Pool: CognitoUserPool;
}
