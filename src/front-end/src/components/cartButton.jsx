import React from "react";

const CartButton = (props) => {
  const { onClick } = props;

  return (
    <button
      className="p-2 bg-[#F4F2EC] rounded-full hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 35 30"
        className=""
      >
        <path
          d="M32.6494 6.2588C32.234 6.11316 31.794 6.05031 31.3544 6.0738H14.5194C13.8719 6.0738 13.0394 5.9813 12.3919 6.1663C11.9947 6.25671 11.6404 6.4804 11.3879 6.80015C11.1355 7.1199 11.0002 7.51644 11.0044 7.9238C11.0044 8.41445 11.1993 8.885 11.5463 9.23195C11.8932 9.57889 12.3638 9.7738 12.8544 9.7738H29.5969L28.1169 17.5438C28.0233 17.9644 27.7889 18.3403 27.4525 18.6095C27.116 18.8786 26.6978 19.0248 26.2669 19.0238H12.3919C11.9648 19.0108 11.5535 18.8595 11.2199 18.5926C10.8863 18.3257 10.6483 17.9576 10.5419 17.5438L7.58191 3.8538C7.40258 3.02585 6.94859 2.28285 6.29369 1.7455C5.63878 1.20814 4.82143 0.907986 3.97441 0.893799H2.67941C2.18876 0.893799 1.7182 1.08871 1.37126 1.43565C1.02432 1.78259 0.829407 2.25315 0.829407 2.7438C0.829407 3.23445 1.02432 3.705 1.37126 4.05195C1.7182 4.39889 2.18876 4.5938 2.67941 4.5938H3.97441L6.93441 18.2838C7.48941 20.8738 9.70941 22.6313 12.3919 22.6313H26.2669C28.4869 22.6313 30.7994 21.1513 31.4469 19.0238C31.9094 17.5438 32.1869 15.8788 32.4644 14.3988C32.7419 12.8263 33.1119 11.2538 33.3894 9.7738C33.4952 9.47597 33.5576 9.16443 33.5744 8.8488C33.6509 8.54675 33.6821 8.23501 33.6669 7.9238C33.6669 7.1838 33.2969 6.4438 32.6494 6.2588ZM8.22941 26.3313C8.22941 27.0673 8.52177 27.7731 9.04218 28.2935C9.5626 28.8139 10.2684 29.1063 11.0044 29.1063C11.7404 29.1063 12.4462 28.8139 12.9666 28.2935C13.487 27.7731 13.7794 27.0673 13.7794 26.3313C13.7794 25.5953 13.487 24.8895 12.9666 24.3691C12.4462 23.8487 11.7404 23.5563 11.0044 23.5563C10.2684 23.5563 9.5626 23.8487 9.04218 24.3691C8.52177 24.8895 8.22941 25.5953 8.22941 26.3313ZM24.8794 26.3313C24.8794 26.8801 25.0422 27.4167 25.3471 27.873C25.652 28.3294 26.0854 28.685 26.5925 28.8951C27.0995 29.1051 27.6575 29.1601 28.1958 29.053C28.7341 28.9459 29.2285 28.6816 29.6166 28.2935C30.0047 27.9054 30.269 27.411 30.3761 26.8727C30.4832 26.3344 30.4282 25.7764 30.2182 25.2694C30.0081 24.7623 29.6525 24.3289 29.1961 24.024C28.7398 23.719 28.2032 23.5563 27.6544 23.5563C26.9184 23.5563 26.2126 23.8487 25.6922 24.3691C25.1718 24.8895 24.8794 25.5953 24.8794 26.3313Z"
          fill="#0D3745"
        />
      </svg>
    </button>
  );
};

export default CartButton;