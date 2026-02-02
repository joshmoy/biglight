import { Button } from "../Button/Button";
import userIcon from "../../assets/icons/user-icon.svg";
import cardGraphicDesktop from "../../assets/icons/card-graphic-desktop.svg";
import cardGraphicMobile from "../../assets/icons/card-graphic-mobile.svg";

export type CardSize = "desktop" | "mobile";

export interface CardProps {
  size?: CardSize;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const sizeStyles: Record<CardSize, string> = {
  desktop: "gap-6 px-6 py-6",
  mobile: "gap-4 px-5 py-4",
};

const titleStyles: Record<CardSize, string> = {
  desktop: "text-[32px] leading-[38.4px] font-medium",
  mobile: "text-[20px] leading-[24px] font-medium",
};

const contentGapStyles: Record<CardSize, string> = {
  desktop: "gap-8",
  mobile: "gap-5",
};

const graphicSizes: Record<CardSize, string> = {
  desktop: "w-[142px] h-[143px]",
  mobile: "w-[83px] h-[84px]",
};

export function Card({
  size = "desktop",
  title = "Join the family.",
  buttonText = "Join",
  onButtonClick,
  className = "",
}: CardProps) {
  const graphic = size === "desktop" ? cardGraphicDesktop : cardGraphicMobile;

  return (
    <div
      className={`inline-flex items-center justify-between rounded-[20px] bg-surface-primary ${sizeStyles[size]} ${className}`.trim()}
    >
      <div className={`flex flex-col w-[50%] ${contentGapStyles[size]}`}>
        <h2 className={`text-inverse font-heading ${titleStyles[size]}`}>{title}</h2>
        <Button
          size="sm"
          onClick={onButtonClick}
          className="!bg-action-primary !text-action-onprimary hover:!bg-action-hover-primary !px-4 !py-2.5 !gap-2 w-fit"
        >
          <img src={userIcon} alt="" className="w-[10px] h-[11px]" aria-hidden="true" />
          {buttonText}
        </Button>
      </div>
      <img src={graphic} alt="" className={`${graphicSizes[size]}`} aria-hidden="true" />
    </div>
  );
}
