import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { authType } from "@/types/authType";

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

  async login(endpoint: string, data: authType): Promise<AxiosResponse> {
    try {
      const response = await this.api.post(endpoint, data);
      localStorage.setItem("token", response.data);
      return response.data;
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
