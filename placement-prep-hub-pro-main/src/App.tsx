import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import PlacementQuestions from "./pages/PlacementQuestions";
import CompanyRules from "./pages/CompanyRules";
import SelectCompany from "./pages/SelectCompany";
import AccentureRules from "./pages/companies/AccentureRules";
import TcsRules from "./pages/companies/TcsRules";
import InfosysRules from "./pages/companies/InfosysRules";
import DeloitteRules from "./pages/companies/DeloitteRules";
import CognizantRules from "./pages/companies/CognizantRules";
import GenpactRules from "./pages/companies/GenpactRules";
import TechMahindraRules from "./pages/companies/TechMahindraRules";
import EygdsRules from "./pages/companies/EygdsRules";
import SmartReconRules from "./pages/companies/SmartReconRules";
import SwiggyRules from "./pages/companies/SwiggyRules";
import IdfcRules from "./pages/companies/IdfcRules";
import IciciRules from "./pages/companies/IciciRules";
import WiproRules from "./pages/companies/WiproRules";
import JaroRules from "./pages/companies/JaroRules";
import PiramalRules from "./pages/companies/PiramalRules";
import AdpRules from "./pages/companies/AdpRules";
import LorealRules from "./pages/companies/LorealRules";
import PlanetsparkRules from "./pages/companies/PlanetsparkRules";
import HppowerlabRules from "./pages/companies/HppowerlabRules";
import GenericCompanyRules from "./pages/companies/GenericCompanyRules";
import SkillGuide from "./pages/SkillGuide";
import ResumeReader from "./pages/ResumeReader";
import ResumeBuilder from "./pages/ResumeBuilder";
import MockTest from "./pages/MockTest";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

// Keep separate dashboard pages
import DashboardAboutUs from "./pages/DashboardAboutUs";
import DashboardContactUs from "./pages/DashboardContactUs";
import DashboardAchievements from "./pages/DashboardAchievements";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="placement-questions" element={<PlacementQuestions />} />
              <Route path="company-rules" element={<CompanyRules />} />
              <Route path="select-company" element={<SelectCompany />} />
              <Route path="company-rules/accenture" element={<AccentureRules />} />
              <Route path="company-rules/tcs" element={<TcsRules />} />
              <Route path="company-rules/infosys" element={<InfosysRules />} />
              <Route path="company-rules/deloitte" element={<DeloitteRules />} />
              <Route path="company-rules/cognizant" element={<CognizantRules />} />
              <Route path="company-rules/genpact" element={<GenpactRules />} />
              <Route path="company-rules/techmahindra" element={<TechMahindraRules />} />
              <Route path="company-rules/eygds" element={<EygdsRules />} />
              <Route path="company-rules/smartrecon" element={<SmartReconRules />} />
              <Route path="company-rules/swiggy" element={<SwiggyRules />} />
              <Route path="company-rules/idfc" element={<IdfcRules />} />
              <Route path="company-rules/icici" element={<IciciRules />} />
              <Route path="company-rules/wipro" element={<WiproRules />} />
              <Route path="company-rules/jaro" element={<JaroRules />} />
              <Route path="company-rules/piramal" element={<PiramalRules />} />
              <Route path="company-rules/adp" element={<AdpRules />} />
              <Route path="company-rules/loreal" element={<LorealRules />} />
              <Route path="company-rules/planetspark" element={<PlanetsparkRules />} />
              <Route path="company-rules/hppowerlab" element={<HppowerlabRules />} />
              <Route path="company-rules/:companyId" element={<GenericCompanyRules />} />
              <Route path="skill-guide" element={<SkillGuide />} />
              <Route path="resume-reader" element={<ResumeReader />} />
              <Route path="resume-builder" element={<ResumeBuilder />} />
              <Route path="mock-test" element={<MockTest />} />
              <Route path="dashboard-about" element={<DashboardAboutUs />} />
              <Route path="dashboard-contact" element={<DashboardContactUs />} />
              <Route path="dashboard-achievements" element={<DashboardAchievements />} />
            </Route>
            
            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
