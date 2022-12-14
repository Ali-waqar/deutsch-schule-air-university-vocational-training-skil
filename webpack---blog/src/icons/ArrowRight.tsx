import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const ArrowRight = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 16 14" {...props}>
    <path
      d="M8.64 13.2563C8.32 12.9313 8.32 12.3973 8.64 12.1188L12.9371 7.80089L0.8 7.80089C0.365714 7.80089 6.05793e-07 7.42947 5.67233e-07 6.98839C5.28674e-07 6.54732 0.342857 6.17589 0.8 6.17589L12.9371 6.17589L8.64 1.88125C8.32 1.55625 8.32 1.06875 8.64 0.743751C8.96 0.418751 9.44 0.418751 9.76 0.743751L16 6.98839L9.71429 13.2562C9.44 13.5812 8.91429 13.5812 8.64 13.2563Z"
      fill="currentColor"
    />
  </Icon>
);
