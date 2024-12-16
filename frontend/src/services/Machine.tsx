import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { machineType, machinePostType } from "@/types/machineType";

class MachineService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3014/machines/",
    });
  }

  async get(endpoint: string): Promise<machineType[]> {
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

  async getById(endpoint: string, id: number): Promise<machineType> {
    try {
      const response = await this.api.get(`${endpoint}/${id}`, {
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

  async post(endpoint: string, data: machinePostType): Promise<AxiosResponse> {
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

  async update(
    endpoint: string,
    id: number,
    data: machinePostType
  ): Promise<AxiosResponse> {
    try {
      const response = await this.api.put(`${endpoint}/${id}`, data, {
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

  async delete(endpoint: string, id: number): Promise<AxiosResponse> {
    try {
      const response = await this.api.delete(`${endpoint}/${id}`, {
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
      if (error.response.status === 403 || error.response.status === 401) {
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

export default new MachineService();
