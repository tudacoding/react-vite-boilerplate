import axiosInstance from '@/lib/axios';

export interface BaseEntity {
  id: string;
}

export class ApiFactory<T extends BaseEntity> {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(): Promise<T[]> {
    const { data } = await axiosInstance.get<T[]>(this.endpoint);
    return data;
  }

  async getOne(id: string): Promise<T> {
    const { data } = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return data;
  }

  async create(payload: Omit<T, 'id'>): Promise<T> {
    const { data } = await axiosInstance.post<T>(this.endpoint, payload);
    return data;
  }

  async update(id: string, payload: Partial<T>): Promise<T> {
    const { data } = await axiosInstance.put<T>(`${this.endpoint}/${id}`, payload);
    return data;
  }

  async delete(id: string): Promise<void> {
    await axiosInstance.delete(`${this.endpoint}/${id}`);
  }
} 