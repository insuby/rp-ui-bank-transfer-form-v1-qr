import type { TransferCardData } from '../typings';

export class TransferApi {
  static readonly KEY = 'transfer';

  static async init(formId: string): Promise<{ data: TransferCardData }> {
    return fetch(`/api/bank_transfer/v1/form/${formId}/init`, {
      method: 'POST',
    }).then((r) => r.json());
  }

  static async complete(formId: string): Promise<unknown> {
    return await fetch(`/api/bank_transfer/v1/form/${formId}/complete`, {
      method: 'POST',
    });
  }
}
