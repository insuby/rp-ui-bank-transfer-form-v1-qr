import { TransferCard } from 'widgets';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { TransferApi } from 'widgets/transfer-card/api';
import { TransferCardData } from 'widgets/transfer-card/typings';

export const PaymentPage = () => {
  const { formId = '' } = useParams<{ formId: string }>();

  const { data } = useQuery<{ data: TransferCardData }>({
    queryKey: [TransferApi.KEY],
    queryFn: () => TransferApi.init(formId),
    staleTime: Infinity,
  });

  if (!data) return <div />;

  return <TransferCard data={data.data} />;
};
