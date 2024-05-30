import { Currency } from '../typings';

export type TransferCardData = {
  amount: number;
  currency: Currency;
  nameAndAddress: string;
  bankName: string;
  account: string;
  swiftCode?: any;
  invoiceId: string;
  type: string;
  expiresIn: string;
  timerMinutes: number;
  successUrl?: any;
  cancelUrl?: any;
  errorUrl?: any;
  formId: string;
};
