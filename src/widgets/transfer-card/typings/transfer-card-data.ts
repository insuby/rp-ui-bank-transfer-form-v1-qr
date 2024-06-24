import { Credential, Currency } from '../typings';

export type TransferCardData = {
  amount: number;
  currency: Currency;
  invoiceId: string;
  type: string;
  expiresIn: string;
  timerMinutes: number;
  successUrl?: any;
  cancelUrl?: any;
  errorUrl?: any;
  paymentMethod: 'BANK_TRANSFER_V1' | 'BANK_TRANSFER_QR_SBP';
  credentials: Credential[];
};
