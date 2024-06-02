import { TStepperNavigationData, TPlanRadioMonthly, TPlanRadioYearly, TAdd_ons } from "../types";
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
    subTitle: "$9/mo",
    intPrice: 9,
  },
  {
    icon: AdvancedImg,
    title: "Advanced",
    subTitle: "$12/mo",
    intPrice: 12,
  },
  {
    icon: ProImg,
    title: "PRO",
    subTitle: "$15/mo",
    intPrice: 15,
  },
];

export const PlanYearly: TPlanRadioYearly[] = [
  {
    icon: ArcadeImg,
    title: "Arcade",
    subTitle: "$90/yr",
    discount: "2 month free",
    intPrice: 90,
  },
  {
    icon: AdvancedImg,
    title: "Advanced",
    subTitle: "$120/yr",
    discount: "2 month free",
    intPrice: 120,
  },
  {
    icon: ProImg,
    title: "PRO",
    subTitle: "$150/yr",
    discount: "2 month free",
    intPrice: 150,
  },
];

export const Add_ons: TAdd_ons[] = [
  {
    title: "Online service",
    subTitle: "Access to multiplayer games",
    price: "+$1/mo",
    id: "checkbox1",
    checked: false,
    intPrice: 1,
  },
  {
    title: "Larger storage",
    subTitle: "Extra 1TB of cloud save",
    price: "+$2/mo",
    id: "checkbox2",
    checked: false,
    intPrice: 2,
  },
  {
    title: "Customizable profile",
    subTitle: "Custom theme on your profile",
    price: "+$2/mo",
    id: "checkbox3",
    checked: false,
    intPrice: 2,
  },
];
