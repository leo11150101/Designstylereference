import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { InteractiveDemo } from './components/InteractiveDemo';
import { CaseStudies } from './components/CaseStudies';
import { AllProducts } from './components/AllProducts';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#2d8cf0]/20 selection:text-[#2d8cf0]">
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <InteractiveDemo />
        <AllProducts />
        <CaseStudies />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}