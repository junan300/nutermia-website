/**
 * App — Routing for Nutermia website.
 * Style guard: Bio-Industrial Editorial. All routes wrapped in PageLayout (Header + Footer).
 * Localization: I18nProvider wraps every page; default language Spanish, switchable to English.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import { PageLayout } from "./components/PageLayout";
import Home from "./pages/Home";
import Equipos from "./pages/Equipos";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Tour from "./pages/Tour";

function Router() {
  return (
    <PageLayout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/equipos"} component={Equipos} />
        <Route path={"/servicios"} component={Servicios} />
        <Route path={"/productos"} component={Productos} />
        <Route path={"/quienes-somos"} component={QuienesSomos} />
        <Route path={"/tour"} component={Tour} />
        <Route path={"/contacto"} component={Contacto} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
