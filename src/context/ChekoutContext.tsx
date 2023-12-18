import React, { createContext, useContext, useState } from "react";
import {
  CheckoutData,
  DeliveryInfo,
  PaymentInfo,
  PersonalInfo,
} from "../schema/checkout.shema";

type ChekoutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>;
};
const ChekoutContext = createContext<ChekoutContextType>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
});
export default function ChekoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);
    const chekoutData: CheckoutData = { ...personal, ...delivery, ...payment };
    console.log(chekoutData);

    return true;
  };
  return (
    <ChekoutContext.Provider
      value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}
    >
      {children}
    </ChekoutContext.Provider>
  );
}

export const useChekoutContext = () => useContext(ChekoutContext);
