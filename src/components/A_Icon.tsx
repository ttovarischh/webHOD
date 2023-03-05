import React, { FC } from "react";

type PropsT = {
  fill?: string;
  iconName?: string;
};

const A_Icon = (props: PropsT) => {
  if (props.iconName == "logo") {
    return (
      <svg
        width="36"
        height="28"
        viewBox="0 0 36 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.81822 18.0132C7.77262 13.8265 6.20061 8.86493 0 5.52908L0.969873 3.84578C7.94263 7.59705 9.76074 13.2935 9.81192 17.993C9.83731 20.3245 9.43128 22.4133 9.02233 23.9147C8.81734 24.6672 8.61021 25.2773 8.45285 25.7025C8.37413 25.9153 8.30772 26.0822 8.26007 26.1979C8.23624 26.2558 8.21709 26.301 8.20342 26.3327C8.19658 26.3486 8.19111 26.3611 8.18711 26.3702L8.18222 26.3812L8.18062 26.3848L8.18004 26.3861C8.17981 26.3866 8.17961 26.3871 7.26517 26.0035C6.35073 25.6198 6.35058 25.6202 6.35044 25.6205L6.3524 25.616C6.35444 25.6114 6.35794 25.6034 6.3628 25.5921C6.37251 25.5696 6.38765 25.534 6.40743 25.4859C6.447 25.3898 6.50508 25.2441 6.57544 25.0539C6.71625 24.6733 6.90567 24.1164 7.0942 23.4243C7.47229 22.0362 7.84122 20.1249 7.81822 18.0132Z"
          fill={props.fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.937 18.1736C18.7685 18.1736 21.0639 15.9556 21.0639 13.2195C21.0639 10.4834 18.7685 8.26539 15.937 8.26539C13.1054 8.26539 10.81 10.4834 10.81 13.2195C10.81 15.9556 13.1054 18.1736 15.937 18.1736ZM15.937 20.1002C19.8696 20.1002 23.0577 17.0196 23.0577 13.2195C23.0577 9.41939 19.8696 6.33879 15.937 6.33879C12.0043 6.33879 8.81622 9.41939 8.81622 13.2195C8.81622 17.0196 12.0043 20.1002 15.937 20.1002Z"
          fill={props.fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1821 5.68002C24.728 3.26815 20.2061 1.80441 15.9686 1.93463L15.9528 1.93512H15.937C8.62219 1.93512 2.6924 7.66503 2.6924 14.7332H0.69859C0.69859 6.60612 7.51245 0.0168141 15.9211 0.00852405C20.6348 -0.132392 25.5767 1.4838 29.3499 4.11845C33.1139 6.74668 35.875 10.5117 35.875 14.7332V15.6965L24.8929 15.6965V13.7699L33.8211 13.7699C33.444 10.7412 31.3188 7.87018 28.1821 5.68002Z"
          fill={props.fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.92675 22.7837L5.65343 21.8204L7.77324 25.3682L11.4449 23.3199L12.4418 24.9883L7.04346 28L3.92675 22.7837Z"
          fill={props.fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.9069 10.3365L29.3168 11.6988L26.3189 14.5957L29.3168 17.4925L27.9069 18.8548L23.4992 14.5957L27.9069 10.3365Z"
          fill={props.fill}
        />
      </svg>
    );
  }
  return <></>;
};

export default A_Icon;
