
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Enterprise from "@/pages/enterprise";
import Services from "@/pages/services";
import About from "@/pages/about";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import SalesforcePage from "@/pages/enterprise/salesforce";
import ServiceNowPage from "@/pages/enterprise/servicenow";
import SAPPage from "@/pages/enterprise/sap";
import CloudPage from "@/pages/services/cloud";
import AIMLPage from "@/pages/services/ai-ml";
import DataAnalyticsPage from "@/pages/services/data-analytics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/enterprise" component={Enterprise} />
      <Route path="/enterprise/salesforce" component={SalesforcePage} />
      <Route path="/enterprise/servicenow" component={ServiceNowPage} />
      <Route path="/enterprise/sap" component={SAPPage} />
      <Route path="/services" component={Services} />
      <Route path="/services/cloud" component={CloudPage} />
      <Route path="/services/ai-ml" component={AIMLPage} />
      <Route path="/services/data-analytics" component={DataAnalyticsPage} />
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
