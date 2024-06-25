import './styles/main.scss';

import type { Locale } from '@eo-locale/core';
import { PaymentPage } from 'pages';

import { TranslationsProvider } from '@eo-locale/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useSearchParams,
} from 'react-router-dom';

import { Locales } from 'shared/locale';
import { RoutesPath } from 'shared/routes-path';

const LOCALES: Locale[] = [
  {
    language: 'en',
    messages: Locales.en,
  },
  {
    language: 'ru',
    messages: Locales.ru,
  },
  {
    language: 'uz',
    messages: Locales.uz,
  },
];

const availableLanguages = LOCALES.map((locale) => locale.language);

const getLanguageFromSearchParams = (searchParams: URLSearchParams) => {
  const language = searchParams.get('lang')?.toLowerCase();
  if (language && availableLanguages.includes(language)) {
    return language;
  }

  return 'en';
};

export const App = () => {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const Pages = () => {
  const [searchParams] = useSearchParams();
  const language = getLanguageFromSearchParams(searchParams);

  return (
    <TranslationsProvider language={language} locales={LOCALES}>
      <Routes>
        <Route path={RoutesPath.PAYMENT} element={<PaymentPage />} />
        <Route
          path="*"
          element={<Navigate replace to={RoutesPath.PAYMENT} />}
        />
      </Routes>
    </TranslationsProvider>
  );
};
