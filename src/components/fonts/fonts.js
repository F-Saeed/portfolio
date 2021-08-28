import { createGlobalStyle } from 'styled-components';
import poppinsSemiBoldURL from './Poppins/Poppins-SemiBold.ttf';
import poppinsRegularURL from './Poppins/Poppins-Regular.ttf';
import poppinsMediumURL from './Poppins/Poppins-Medium.ttf';

export const PoppinsSemiBold = createGlobalStyle`
    @font-face {
      font-family: 'Poppins SemiBold';
      src: url(${poppinsSemiBoldURL}) format('truetype'); 
      font-style: normal;
    }
`;

export const PoppinsRegular = createGlobalStyle`
    @font-face {
      font-family: 'Poppins Regular';
      src: url(${poppinsRegularURL}) format('truetype'); 
      font-style: normal;
    }
`;

export const PoppinsMedium = createGlobalStyle`
    @font-face {
      font-family: 'Poppins Medium';
      src: url(${poppinsMediumURL}) format('truetype'); 
      font-style: normal;
    }
`;
