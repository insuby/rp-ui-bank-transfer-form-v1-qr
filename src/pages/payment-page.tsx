import { TransferCard } from 'widgets';

import { useQuery } from '@tanstack/react-query';

import { TransferApi } from 'widgets/transfer-card/api';
import { TransferCardData } from 'widgets/transfer-card/typings';

export const PaymentPage = () => {
  const { data } = useQuery<{ data: TransferCardData }>({
    queryKey: [TransferApi.KEY],
    queryFn: () => TransferApi.init('9013f5f5-2fe4-43cc-b98b-1a906b25d3c9'),
    staleTime: Infinity,
  });

  if (!data) return <div />;

  return <TransferCard data={data.data} />;
};
