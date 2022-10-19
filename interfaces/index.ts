
export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password?:string;
}


export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}