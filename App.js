import React from 'react';
//step01 - 'react-query' - [App.js] - Importar QueryClient e QueryClientProvider
import { QueryClient, QueryClientProvider } from 'react-query';

import { Horoscope } from './screens/Horoscope';


//step02 - 'react-query' - [App.js] - Criar um client -> new QueryClient()
const queryClient = new QueryClient()

export default function App() {
  return (
    //step03 - 'react-query' - [App.js] - Provide the client to your App -> put around the app
    <QueryClientProvider client={queryClient}>
      <Horoscope/>
    </QueryClientProvider>
  );
}