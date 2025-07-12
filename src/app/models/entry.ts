export interface Entry {
  dataEntryTime: Date;
  measurementTime: any;
  value: number;
  sugarValue: number;
  unit: string;
  referenceValue: number;
  status: 'normal' | 'high' | 'low' | 'elevated';
}