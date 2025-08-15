
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Enterprise from "@/pages/enterprise";
import Services from "@/pages/services";
import About from "@/pages/about";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import SocialImpactPage from "@/pages/social-impact";
import SalesforcePage from "@/pages/enterprise/salesforce";
import ServiceNowPage from "@/pages/enterprise/servicenow";
import SAPPage from "@/pages/enterprise/sap";
import CloudPage from "@/pages/services/cloud";
import AIMLPage from "@/pages/services/ai-ml";
import DataAnalyticsPage from "@/pages/services/data-analytics";
import GovernmentPage from "@/pages/services/government";
import StaffAugmentationPage from "@/pages/services/staff-augmentation";

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
      <Route path="/services/government" component={GovernmentPage} />
      <Route path="/services/staff-augmentation" component={StaffAugmentationPage} />
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/social-impact" component={SocialImpactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Add scrolling class when user starts scrolling
      document.body.classList.add('scrolling');
      
      // Clear existing timer
      clearTimeout(scrollTimer);
      
      // Remove scrolling class after 1 second of no scrolling
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
      document.body.classList.remove('scrolling');
    };
  }, []);

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
