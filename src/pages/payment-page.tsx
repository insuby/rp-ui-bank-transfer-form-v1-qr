import { cx } from '@emotion/css';

import { TransferCard } from 'widgets';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TransferApi } from 'widgets/transfer-card/api';
import type { TransferCardData } from 'widgets/transfer-card/typings';

export const PaymentPage = () => {
  const { formId = '' } = useParams<{ formId: string }>();

  const [shouldRefetch, setShouldRefetch] = useState(true);

  const { data, refetch } = useQuery<{ data: TransferCardData }>({
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: [TransferApi.KEY],
    queryFn: () => TransferApi.init(formId),
  });

  useEffect(() => {
    if (shouldRefetch && (!data || !data.data)) {
      refetch().then((result) => {
        if (result.data && result.data.data) {
          setShouldRefetch(false);
        }
      });
    }
  }, [shouldRefetch, data, refetch]);

  if (!data)
    return (
      <div className="transfer-card">
        <div
          role="status"
          className={cx(
            'absolute m-auto inset-0 inline-block h-8 w-8 self-center',
            'justify-self-center animate-spin rounded-full',
            'border-4 border-solid border-current border-e-transparent',
            'align-[-0.125em] text-surface text-[#8375E9]',
          )}
        />
      </div>
    );

  return <TransferCard data={data.data} formId={formId} />;
};
