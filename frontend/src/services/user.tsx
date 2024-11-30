import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { userType } from "@/types/userType";

class UserService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3011/api/User",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string): Promise<userType[]> {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async getById(endpoint: string, id: number): Promise<userType> {
    try {
      const response = await this.api.get(`${endpoint}/${id}`);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async post(endpoint: string, data: userType): Promise<AxiosResponse> {
    try {
      const response = await this.api.post(endpoint, data);
      return response;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async update(
    endpoint: string,
    id: number,
    data: userType
  ): Promise<AxiosResponse> {
    try {
      const response = await this.api.put(`${endpoint}/${id}`, data);
      return response;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  async delete(endpoint: string, id: number): Promise<AxiosResponse> {
    try {
      const response = await this.api.delete(`${endpoint}/${id}`);
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

export default new UserService();
