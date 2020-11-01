import { Colors } from '@constants/colors';
import {
  ButtonStyleConfig,
  ButtonColors,
} from '@shared/directives/buttons/button.types';

export const IconButtonStyleConfig: ButtonStyleConfig = {
  [ButtonColors.basic]: {
    main: {
      backgroundColor: Colors.$grey50,
      borderRadius: '50%',
      cursor: 'pointer',
      outline: 'none',
      border: `1px solid ${Colors.$grey500}`,
      color: Colors.$grey900,
      height: 'max-content',
    },
    hover: {
      backgroundColor: Colors.$grey200,
    },
    active: {
      backgroundColor: Colors.$grey300,
    },
  },
  [ButtonColors.warn]: {
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
