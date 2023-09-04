import React from 'react';
import Layout from '../components/Layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';

function RootLayout({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeRegistry>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeRegistry>
    </QueryClientProvider>
  );
}

export default RootLayout;
