import { Colors } from '@constants/colors';

export enum StrokedButtonTypes {
  basic = 'basic',
  warn = 'warn',
}

export interface StrokedButtonStyle {
  main: {
    color: string;
    backgroundColor: string;
    border: string;
    borderRadius?: string;
    display?: string;
    cursor?: string;
    fontSize?: string;
    padding?: string;
    textDecoration?: string;
    outline?: string;
  };
  hover: {
    backgroundColor: string;
  };
  active: {
    backgroundColor: string;
  };
}

export const StrokedButtonStyles: { [key: string]: StrokedButtonStyle } = {
  [StrokedButtonTypes.basic]: {
    main: {
      backgroundColor: Colors.$grey50,
      borderRadius: '4px',
      display: 'inline-block',
      cursor: 'pointer',
      fontSize: '14px',
      padding: '12px 20px',
      textDecoration: 'none',
      outline: 'none',
      border: `1px solid ${Colors.$grey300}`,
      color: Colors.$grey900,
    },
    hover: {
      backgroundColor: Colors.$grey200,
    },
    active: {
      backgroundColor: Colors.$grey300,
    },
  },
  [StrokedButtonTypes.warn]: {
    main: {
      color: Colors.$grey50,
      backgroundColor: Colors.$red400,
      border: `1px solid ${Colors.$red400}`,
    },
    hover: {
      backgroundColor: Colors.$red500,
    },
    active: {
      backgroundColor: Colors.$red600,
    },
  },
};
