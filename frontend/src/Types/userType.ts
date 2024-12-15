import { userRole } from "./authType";

export type userType = {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role?: {
    id?: number;
    name: userRole;
  };
};
