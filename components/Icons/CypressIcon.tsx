import { FC } from 'react';
import { IconProps } from './types';

export const CypressIcon: FC<IconProps> = ({ active = true, ...rest }) => {
  return (
    <svg width="119" height="48" viewBox="0 0 119 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M0.854023 30.3588C0.288116 28.2979 0 26.1573 0 24.0013C0 14.1592 6.18126 5.16 15.3824 1.61121L16.5888 4.73343C8.66867 7.78884 3.34915 15.5314 3.34915 24.0013C3.34915 25.8592 3.59608 27.6991 4.08225 29.4722L0.854023 30.3588Z"
        fill="#69D3A7"></path>
      <path
        d="M42.4508 14.4933C38.8702 7.61925 31.8221 3.34836 24.0614 3.34836C21.3116 3.34836 18.639 3.87772 16.1233 4.91846L14.8397 1.82707C17.7644 0.616732 20.8666 0 24.0614 0C33.0774 0 41.2624 4.95958 45.4219 12.9463L42.4508 14.4933Z"
        fill="url(#paint0_linear_1375_10683)"></path>
      <path
        d="M16.877 19.0494C18.819 19.0494 20.401 20.085 21.2139 21.8915L21.2782 22.0329L24.5398 20.9253L24.4704 20.7583C23.2074 17.6823 20.2981 15.7704 16.877 15.7704C14.4718 15.7704 12.5169 16.5414 10.9015 18.1243C9.29634 19.697 8.48352 21.6757 8.48352 24.0064C8.48352 26.3166 9.29634 28.285 10.9015 29.8577C12.5169 31.4407 14.4718 32.2116 16.877 32.2116C20.2981 32.2116 23.2074 30.2997 24.4704 27.2263L24.5398 27.0593L21.273 25.9491L21.2113 26.0956C20.4833 27.8713 18.8628 28.9326 16.877 28.9326C15.5239 28.9326 14.3818 28.4598 13.4763 27.5295C12.5606 26.5864 12.0976 25.4018 12.0976 24.009C12.0976 22.6059 12.5503 21.4444 13.4763 20.4576C14.3792 19.5223 15.5239 19.0494 16.877 19.0494Z"
        fill="#1B1E2E"></path>
      <path
        d="M57.0692 18.1269C55.5644 16.5645 53.6866 15.7704 51.4847 15.7704C49.2982 15.7704 47.4976 16.5491 46.1292 18.0832V16.0737H42.6051V37.9703H46.1292V29.8988C47.4976 31.433 49.2957 32.2116 51.4847 32.2116C53.6866 32.2116 55.5669 31.4175 57.0717 29.8526C58.5534 28.2799 59.3019 26.314 59.3019 24.0064C59.2994 21.6757 58.5508 19.6996 57.0692 18.1269ZM54.3065 27.5244C53.4036 28.4572 52.259 28.9275 50.9085 28.9275C49.5375 28.9275 48.4262 28.4675 47.5079 27.5244C46.5922 26.5813 46.1292 25.3967 46.1292 24.0039C46.1292 22.57 46.5793 21.4084 47.5079 20.4525C48.4237 19.5068 49.5349 19.0494 50.9085 19.0494C52.2615 19.0494 53.4036 19.5223 54.3065 20.4525C55.2145 21.3879 55.6544 22.5494 55.6544 24.0039C55.6544 25.4378 55.212 26.589 54.3065 27.5244Z"
        fill="#1B1E2E"></path>
      <path
        d="M65.0381 17.9599V16.0737H61.514V31.9058H65.0381V22.9734C65.0381 21.5421 65.6143 20.4474 66.7512 19.7201C67.8805 18.998 69.2361 18.8644 70.8953 19.3167L71.1087 19.3758V15.9889L70.9776 15.958C68.7499 15.4261 66.5146 16.1919 65.0381 17.9599Z"
        fill="#1B1E2E"></path>
      <path
        d="M80.2507 15.7704C77.9279 15.7704 75.9575 16.5619 74.3936 18.1243C72.809 19.7073 72.0065 21.686 72.0065 24.0064C72.0065 26.3166 72.8193 28.285 74.4244 29.8577C76.0399 31.4407 77.9948 32.2116 80.3999 32.2116C83.659 32.2116 86.4603 30.5567 87.8956 27.7839L87.9779 27.6246L84.9966 26.3038L84.9246 26.4451C84.0603 28.1154 82.4012 29.1125 80.4925 29.1125C78.0128 29.1125 76.1144 27.5989 75.6 25.2373H88.3843L88.3998 25.0857C88.6776 22.5314 88.0191 20.3163 86.4474 18.4995C84.8834 16.6878 82.7973 15.7704 80.2507 15.7704ZM75.7054 22.4106C76.3305 20.2495 78.0951 18.867 80.2507 18.867C82.4655 18.867 84.2301 20.2495 84.8011 22.4106H75.7054Z"
        fill="#1B1E2E"></path>
      <path
        d="M97.8146 22.4954C95.8931 22.1357 94.234 21.8222 94.234 20.4859C94.234 19.4246 95.3632 18.6845 96.9786 18.6845C98.7612 18.6845 99.7387 19.4503 99.9676 21.0255L99.9934 21.2029L103.517 20.4654L103.492 20.306C103.018 17.5076 100.523 15.7679 96.9812 15.7679C95.2037 15.7679 93.6989 16.2279 92.5105 17.135C91.2964 18.037 90.6816 19.2139 90.6816 20.6375C90.6816 22.6984 91.9883 24.2454 94.1825 24.7748C94.751 24.9084 95.3529 25.0163 95.9343 25.1243C98.1181 25.5226 100.181 25.9003 100.181 27.3702C100.181 28.5035 98.8641 29.2924 96.9812 29.2924C95.0648 29.2924 94.0076 28.5266 93.7478 26.9488L93.7195 26.774L90.198 27.5116L90.2263 27.6734C90.7382 30.513 93.2616 32.209 96.9786 32.209C98.8667 32.209 100.485 31.7388 101.781 30.8137C103.078 29.8988 103.733 28.7193 103.733 27.3085C103.733 23.6081 100.454 22.9914 97.8146 22.4954Z"
        fill="#1B1E2E"></path>
      <path
        d="M113.081 22.4954C111.16 22.1357 109.501 21.8222 109.501 20.4859C109.501 19.4246 110.63 18.6845 112.245 18.6845C114.028 18.6845 115.005 19.4503 115.234 21.0255L115.26 21.2029L118.784 20.4654L118.758 20.306C118.285 17.5076 115.79 15.7679 112.248 15.7679C110.47 15.7679 108.966 16.2279 107.777 17.135C106.563 18.037 105.948 19.2139 105.948 20.6375C105.948 22.6984 107.255 24.2454 109.449 24.7748C110.018 24.9084 110.62 25.0163 111.201 25.1243C113.385 25.5226 115.448 25.9003 115.448 27.3702C115.448 28.5035 114.131 29.2924 112.248 29.2924C110.331 29.2924 109.274 28.5266 109.014 26.9488L108.986 26.774L105.465 27.5116L105.493 27.6734C106.005 30.513 108.528 32.209 112.245 32.209C114.133 32.209 115.751 31.7388 117.048 30.8137C118.344 29.8988 119 28.7193 119 27.3085C119 23.6081 115.72 22.9914 113.081 22.4954Z"
        fill="#1B1E2E"></path>
      <path
        d="M37.3061 16.0737L32.658 27.8353L27.979 16.0737H24.1514L30.7133 32.1268L26.0446 43.449L29.3912 44.1146L40.9228 16.0737H37.3061Z"
        fill="#1B1E2E"></path>
      <path
        d="M26.6434 41.9894L25.828 43.963C25.6659 44.3536 25.2955 44.6182 24.8788 44.6362C24.6036 44.6465 24.3258 44.6542 24.0454 44.6542C14.4481 44.6491 5.95693 37.883 3.85278 28.56L0.585938 29.2975C1.76663 34.5269 4.72994 39.2732 8.93051 42.6653C13.18 46.0958 18.5329 47.9897 24.0094 48C24.0171 48 24.0582 48 24.0582 48C24.3798 48 24.6987 47.9923 25.0177 47.9795C26.736 47.9075 28.2717 46.8308 28.9276 45.235L29.9925 42.655L26.6434 41.9894Z"
        fill="url(#paint1_linear_1375_10683)"></path>
      <defs>
        <linearGradient
          id="paint0_linear_1375_10683"
          x1="21.5577"
          y1="-1.54942"
          x2="39.8226"
          y2="17.9723"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0939" stopColor="#58D09E"></stop>
          <stop offset="0.9883" stopColor="#58D09E" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1375_10683"
          x1="-0.256416"
          y1="34.9215"
          x2="34.638"
          y2="44.2092"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.0774" stopColor="#58D09E"></stop>
          <stop offset="0.7617" stopColor="#1B1E2E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
