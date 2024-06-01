import { TStepperNavigationData, TPlanRadioMonthly, TPlanRadioYearly } from "../types";
// IMAGES
import ArcadeImg from "../assets/icon-arcade.svg";
import AdvancedImg from "../assets/icon-advanced.svg";
import ProImg from "../assets/icon-pro.svg";

export const StepperNavigationData: TStepperNavigationData[] = [
  {
    id: "step1",
    isActive: true,
    count: 1,
    name: "step 1",
    title: "Your Info",
  },
  {
    id: "step2",
    isActive: false,
    count: 2,
    name: "step 2",
    title: "Selected plan",
  },
  {
    id: "step3",
    isActive: false,
    count: 3,
    name: "step 3",
    title: "Add-ons",
  },
  {
    id: "step4",
    isActive: false,
    count: 4,
    name: "step 4",
    title: "Summary",
  },
];

export const PlanRadioMonthly: TPlanRadioMonthly[] = [
  {
    icon: ArcadeImg,
    title: "Arcade",
    subTitle: "$9/yr",
  },
  {
    icon: AdvancedImg,
    title: "Advanced",
    subTitle: "$12/yr",
  },
  {
    icon: ProImg,
    title: "PRO",
    subTitle: "$15/yr",
  },
];

export const PlanYearly: TPlanRadioYearly[] = [
  {
    icon: ArcadeImg,
    title: "Arcade",
    subTitle: "$90/yr",
    discount: "2 month free",
  },
  {
    icon: AdvancedImg,
    title: "Advanced",
    subTitle: "$120/yr",
    discount: "2 month free",
  },
  {
    icon: ProImg,
    title: "PRO",
    subTitle: "$150/yr",
    discount: "2 month free",
  },
];
