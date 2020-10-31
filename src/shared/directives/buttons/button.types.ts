export enum ButtonTypes {
  basic = 'basic',
  warn = 'warn',
}

export interface ButtonStyle {
  main: {
    color: string;
    backgroundColor: string;
    border: string;
    borderRadius?: string;
    cursor?: string;
    fontSize?: string;
    padding?: string;
    textDecoration?: string;
    outline?: string;
    height?: string;
  };
  hover: {
    backgroundColor: string;
  };
  active: {
    backgroundColor: string;
  };
}

export interface ButtonStyleConfig {
  [key: string]: ButtonStyle;
}
