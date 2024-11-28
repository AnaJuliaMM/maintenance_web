import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { categoryType } from "@/types/machine";

class CategoryService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3012/api/Category",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string): Promise<categoryType[]> {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async post(endpoint: string, data: categoryType): Promise<AxiosResponse> {
    try {
      const response = await this.api.post(endpoint, data);
      return response;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
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

export default new CategoryService();
