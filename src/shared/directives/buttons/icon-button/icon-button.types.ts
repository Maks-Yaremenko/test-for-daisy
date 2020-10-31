import { Colors } from '@constants/colors';
import {
  ButtonStyleConfig,
  ButtonTypes,
} from '@shared/directives/buttons/button.types';

export const IconButtonStyleConfig: ButtonStyleConfig = {
  [ButtonTypes.basic]: {
    main: {
      backgroundColor: Colors.$grey50,
      borderRadius: '50%',
      display: 'inline-block',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      outline: 'none',
      border: `1px solid ${Colors.$grey500}`,
      color: Colors.$grey900,
    },
    hover: {
      backgroundColor: Colors.$grey200,
    },
    active: {
      backgroundColor: Colors.$grey300,
    },
  },
  [ButtonTypes.warn]: {
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
