import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect, lazy, Suspense } from "react";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const OverseasRelocation = lazy(() => import("./pages/OverseasRelocation"));
const BusinessConsulting = lazy(() => import("./pages/BusinessConsulting"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const AIServices = lazy(() => import("./pages/AIServices"));
const RelocationIncomeSupport = lazy(() => import("./pages/RelocationIncomeSupport"));
const OverseasCommunity = lazy(() => import("./pages/OverseasCommunity"));
const Start = lazy(() => import("./pages/Start"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/overseas-relocation"} component={OverseasRelocation} />
          <Route path={"/business-consulting"} component={BusinessConsulting} />
          <Route path={"/about-us"} component={AboutUs} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/ai-services" component={AIServices} />
          <Route path={"/relocation-income-support"} component={RelocationIncomeSupport} />
          <Route path={"/overseas-community"} component={OverseasCommunity} />
          <Route path="/start" component={Start} />
          <Route path="/404" component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
