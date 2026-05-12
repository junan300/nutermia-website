/**
 * App — Routing for Nutermia website.
 * Style guard: Bio-Industrial Editorial. All routes wrapped in PageLayout (Header + Footer).
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PageLayout } from "./components/PageLayout";
import Home from "./pages/Home";
import Equipos from "./pages/Equipos";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";

function Router() {
  return (
    <PageLayout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/equipos"} component={Equipos} />
        <Route path={"/servicios"} component={Servicios} />
        <Route path={"/productos"} component={Productos} />
        <Route path={"/quienes-somos"} component={QuienesSomos} />
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
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
