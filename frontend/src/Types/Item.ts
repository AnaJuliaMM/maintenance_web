export type Item = {
  id?: number;
  name: string;
  description: string;
  type: string;
  acquisitionDate: string;
  supplier: string;
  quantity: number;
  status: string;
  images?: string[] | null;
};
