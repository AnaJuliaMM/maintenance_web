import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { locationType } from "@/types/locationType";

class LocationService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3014/locations/",
    });
  }

  async get(endpoint: string): Promise<locationType[]> {
    try {
      const response = await this.api.get(endpoint, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async post(endpoint: string, data: locationType): Promise<AxiosResponse> {
    try {
      const response = await this.api.post(endpoint, data, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      if (error.response.status == 403 || error.response.status == 401) {
        alert(
          "Seu usuário não tem permissão para acessar esta página. Por favor, faça login."
        );
      } else
        console.error(
          `Erro na resposta: ${error.response.status}`,
          error.response.data
        );
    } else if (error.request)
      console.error("Erro na requisição:", error.request);
    else console.error("Erro ao configurar a requisição:", error.message);
  }
}

export default new LocationService();
