import React from "react";

import { type FC, memo } from "react";
// icons
// import PhoneIcon from "@/assets/icons/phone.svg?icon";
import Facebook from "assets/icons/facebook.svg";
import ImageNotFoundIcon from "assets/icons/image-not-found.svg";

import type { SVGComponentElement } from "./icon.interface";

export const icons = {
  // phone: PhoneIcon,
  "image-not-found": ImageNotFoundIcon,
  facebook: Facebook,
} satisfies Record<string, FC<SVGComponentElement>>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
} & SVGComponentElement;

const Icon: FC<IconProps> = memo(({ name, ...props }) => {
  const IconElement = icons[name];

  if (!IconElement) {
    const ImageNotFoundIconElement = icons["image-not-found"];

    return <ImageNotFoundIconElement {...props} />;
  }

  return <IconElement {...props} />;
});

Icon.displayName = "Icon";

export { Icon };
