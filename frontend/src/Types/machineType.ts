import { categoryType } from "./categoryType";
import { locationType } from "./locationType";

export type machineType = {
  id: number;
  serialNumber?: string;
  name: string;
  model?: string;
  manufactureDate?: string;
  category?: categoryType;
  location?: locationType;
};

export type machinePostType = {
  name: string;
  serialNumber: string;
  model: string;
  manufactureDate: string;
  categoryId?: string | number;
  locationId?: string | number;
};
