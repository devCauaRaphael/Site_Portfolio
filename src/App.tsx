import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Formacoes from "./pages/Certificados";
import Leituras from "./pages/Leituras";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* basename garante que as rotas funcionem no GitHub Pages */}
      <BrowserRouter basename="/Site_Portfolio">
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/certificados" element={<Formacoes />} />
            <Route path="/leituras" element={<Leituras />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
