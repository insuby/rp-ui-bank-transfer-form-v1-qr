import './styles.scss';

import { useCopyToClipboard } from 'usehooks-ts';

import type { Dispatch, SetStateAction } from 'react';

export const CopyButton = ({
                             value,
                             copiedValue,
                             setCopiedValue,
                           }: {
  value: string;
  copiedValue: string;
  setCopiedValue: Dispatch<SetStateAction<string>>;
}) => {
  const [copied, copy] = useCopyToClipboard();

  const onClick = () => {
    if (copiedValue !== value) {
      copy(value);
      setCopiedValue(value);
      return;
    }
    copy('');
  };

  return copiedValue !== copied ? (
    <span className="copy-button" onClick={onClick}>
      copy
    </span>
  ) : (
    <span className="copy-button copy-button_copied">copied</span>
  );
};
