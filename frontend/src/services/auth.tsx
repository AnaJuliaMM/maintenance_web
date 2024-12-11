import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { jwtDecode } from "jwt-decode";

import { authType } from "@/types/authType";
import { UserRole } from "@/types/userType";

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
  ): Promise<{ token: string; role: UserRole }> {
    try {
      const response = await this.api.post(endpoint, data);

      // Persist token in local storage
      const token = response.data;
      localStorage.setItem("token", token);

      // Decode token to extract user role
      const decodedToken: { role: UserRole } = jwtDecode(token);
      console.log("Token: " + decodedToken);

      const role = decodedToken.role;
      console.log("Dentro do Service: " + role);

      // Return token and role
      return { token, role };
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
