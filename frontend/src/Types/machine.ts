export type machineType = {
  id?: number;
  serialNumber?: string;
  name: string;
  model?: string;
  manufactureDate?: string;
  category?: categoryType | string | number;
  location?: locationType | string | number; 
};

export type categoryType = {
  id?: number;
  name: string;
};

export type locationType = {
  id?: number;
  name: string;
  description: string;
};
