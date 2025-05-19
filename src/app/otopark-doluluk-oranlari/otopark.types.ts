export interface IOpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface IAccessories {
  covered: boolean;
  barrier: boolean;
  cctv: boolean;
}

export interface IPOI {
  metroStation: boolean;
  trainStation: boolean;
  busStation: boolean;
  tramStation: boolean;
}

export interface IPayment {
  cash: boolean;
  card: boolean;
  sms: boolean;
}

export interface IOccupancyDetails {
  free: number;
  occupied: number;
}

export interface IOccupancy {
  total: IOccupancyDetails;
}

export interface IAccessibility {
  lpgAllowed: boolean;
  disabled: boolean;
  maxLength: number;
  maxHeight: number;
  maxWidth: number;
}

export interface IParkingData {
  status: string;
  openingHours: IOpeningHours;
  provider: string;
  address: string;
  accessories: IAccessories;
  ufid: string;
  poi: IPOI;
  name: string;
  lng: number;
  payment: IPayment;
  exits: any[]; // Can be typed more specifically if needed
  lat: number;
  occupancy: IOccupancy;
  isPaid: boolean;
  accessibility: IAccessibility;
  entrances: any[]; // Can be typed more specifically if needed
  nonstop: boolean;
  type: string;
}
