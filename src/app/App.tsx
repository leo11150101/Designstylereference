import { RouterProvider, createBrowserRouter, Outlet } from 'react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { InteractiveDemo } from './components/InteractiveDemo';
import { CaseStudies } from './components/CaseStudies';
import { AllProducts } from './components/AllProducts';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { MLinkOSPage } from './components/MLinkOSPage';
import { MRTSPage } from './components/MRTSPage';
import { LocationCloudPage } from './components/LocationCloudPage';
import { CloudServicesPage } from './components/CloudServicesPage';
import { AIAlgorithmPage } from './components/AIAlgorithmPage';

function Root() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#2d8cf0]/20 selection:text-[#2d8cf0]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ProductCatalog />
      <InteractiveDemo />
      <AllProducts />
      <CaseStudies />
      <Banner />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mlink-os",
        Component: MLinkOSPage,
      },
      {
        path: "/mlink",
        Component: MLinkOSPage,
      },
      {
        path: "/mlinkos",
        Component: MLinkOSPage,
      },
      {
        path: "/mrts",
        Component: MRTSPage,
      },
      {
        path: "/location-cloud",
        Component: LocationCloudPage,
      },
      {
        path: "/cloud-services",
        Component: CloudServicesPage,
      },
      {
        path: "/event-storage",
        Component: CloudServicesPage,
      },
      {
        path: "/cloud-drive",
        Component: CloudServicesPage,
      },
      {
        path: "/cloud-favorites",
        Component: CloudServicesPage,
      },
      {
        path: "/ai-algorithm",
        Component: AIAlgorithmPage,
      },
      {
        path: "/ai-algorithm/data-masking",
        Component: AIAlgorithmPage,
      },
      {
        path: "/ai-algorithm/dsm",
        Component: AIAlgorithmPage,
      },
      {
        path: "/ai-algorithm/adas",
        Component: AIAlgorithmPage,
      },
      {
        path: "/data-masking",
        Component: AIAlgorithmPage,
      },
      {
        path: "/dsm",
        Component: AIAlgorithmPage,
      },
      {
        path: "/adas",
        Component: AIAlgorithmPage,
      },
      {
        path: "*",
        Component: () => (
          <div className="py-32 text-center">
            <h1 className="text-4xl font-black mb-4">404</h1>
            <p className="text-zinc-500">页面未找到</p>
          </div>
        )
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
