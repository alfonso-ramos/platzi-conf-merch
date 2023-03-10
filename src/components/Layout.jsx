import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/components/Layout.css';
export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
