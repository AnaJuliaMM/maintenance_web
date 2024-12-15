import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { jwtDecode } from "jwt-decode";

import { authType, JwtPayloadType } from "@/types/authType";

interface DecodedJwtPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | "user:admin"
    | "user:user"
    | "user:viewer"
    | "user:editor"
    | null;
  exp?: number;
  iss?: string;
  aud?: string;
}

class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3014/auth",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(
    endpoint: string,
    data: authType
  ): Promise<{ token: string; jwtPayload: JwtPayloadType }> {
    try {
      const response = await this.api.post(endpoint, data);

      // Persist token in local storage
      const token = response.data;
      localStorage.setItem("token", token);

      // Decode token to extract user role
      const decodedToken = jwtDecode<DecodedJwtPayload>(token);
      const jwtPayload: JwtPayloadType = {
        username:
          decodedToken[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ],
        role: decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
        exp: decodedToken.exp,
        iss: decodedToken.iss,
        aud: decodedToken.aud,
      };

      return { token, jwtPayload };
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      console.error(error.response);

      console.error(
        `Erro na resposta: ${error.response.status}`,
        error.response.data
      );
    } else if (error.request) {
      console.error("Erro na requisição:", error.request);
    } else {
      console.error("Erro ao configurar a requisição:", error.message);
    }
  }
}

export default new AuthService();
