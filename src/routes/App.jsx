import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';

import { AppProvider } from '../context/AppContext';

import { Home, Checkout, Information, Payment, Success, NotFound } from '../containers/';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="checkout/payment" element={<Payment />} />
            <Route path="checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
