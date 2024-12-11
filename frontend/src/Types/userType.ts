export type userType = {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role?: {
    id: number;
    name: UserRole;
  };
};

export type UserRole =
  | "user:admin"
  | "user:user"
  | "user:viewer"
  | "user:editor"
  | null;
