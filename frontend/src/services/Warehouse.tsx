import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import { Item } from "@/Types/Item";

class WarehouseService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3013/api/Item",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string): Promise<Item[]> {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  // async post<T, R extends T>(endpoint: string, data: T): Promise<R | R[]> {
  //   try {
  //     const response: AxiosResponse<ApiResponse<R>> = await this.api.post(
  //       endpoint,
  //       data
  //     );

  //     return response.data.data;
  //   } catch (error: any) {
  //     this.handleError(error);
  //     throw error;
  //   }
  // }

  // async put<T, R extends T>(endpoint: string, data: T): Promise<R | R[]> {
  //   try {
  //     const response: AxiosResponse<ApiResponse<R>> = await this.api.put(
  //       endpoint,
  //       data
  //     );
  //     return response.data.data;
  //   } catch (error: any) {
  //     this.handleError(error);
  //     throw error;
  //   }
  // }

  // async delete<T>(endpoint: string): Promise<T | T[]> {
  //   try {
  //     const response: AxiosResponse<ApiResponse<T>> = await this.api.delete(
  //       endpoint
  //     );
  //     return response.data.data;
  //   } catch (error: any) {
  //     this.handleError(error);
  //     throw error;
  //   }
  // }

  private handleError(error: AxiosError): void {
    if (error.response) {
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

export default new WarehouseService();
