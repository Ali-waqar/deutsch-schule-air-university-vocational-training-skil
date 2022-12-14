import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Check = (props: IconProps): JSX.Element => (
  <Icon fill="none" height="9" viewBox="0 0 12 9" width="12" {...props}>
    <path
      d="M11.5764 2.01324L5.38037 8.20923C5.20334 8.38626 4.95044 8.48742 4.67225 8.48742C4.39406 8.48742 4.16646 8.38626 3.96414 8.20923L0.39828 4.64337C0.0189329 4.26403 0.0189329 3.63178 0.39828 3.25244C0.777626 2.87309 1.40987 2.87309 1.78922 3.25244L4.64696 6.11018L10.1601 0.59701C10.5395 0.217663 11.1717 0.217663 11.5511 0.59701C11.9557 1.00165 11.9557 1.6086 11.5764 2.01324Z"
      fill="white"
    />
  </Icon>
);
