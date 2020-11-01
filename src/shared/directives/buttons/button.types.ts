export enum ButtonColors {
  basic = 'basic',
  warn = 'warn',
}

export interface ButtonStyleState {
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  cursor?: string;
  fontSize?: string;
  padding?: string;
  textDecoration?: string;
  outline?: string;
  height?: string;
}

export interface ButtonStyle {
  main: ButtonStyleState;
  hover: ButtonStyleState;
  active: ButtonStyleState;
}

export interface ButtonStyleConfig {
  [key: string]: ButtonStyle;
}
