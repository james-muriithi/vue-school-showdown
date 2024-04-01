interface Benefit {
  title: string;
  disabled?: boolean;
}
export default interface Plan {
  id: number;
  title: string;
  icon?: any;
  benefits: Benefit[];
  pricePerSeat: number;
  priceInterval: string;
  currency: string;
  showMasterClassCourse?: boolean;
}
