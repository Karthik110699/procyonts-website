
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
    
    const showScrollbar = () => {
      document.documentElement.classList.add('scrolling');
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 400);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (scrollKeys.includes(e.key)) showScrollbar();
    };

    // Event options
    const opts = { passive: true };
    
    // Attach scroll detection to document element
    const el = document.documentElement;
    el.addEventListener('scroll', showScrollbar, opts);
    el.addEventListener('wheel', showScrollbar, opts);
    el.addEventListener('touchstart', showScrollbar, opts);
    el.addEventListener('touchmove', showScrollbar, opts);
    el.addEventListener('pointerdown', showScrollbar, opts);
    el.addEventListener('keydown', handleKeydown);

    // Clean up on mouse leave (optional)
    el.addEventListener('mouseleave', () => el.classList.remove('scrolling'));
    
    // Cleanup
    return () => {
      el.removeEventListener('scroll', showScrollbar);
      el.removeEventListener('wheel', showScrollbar);
      el.removeEventListener('touchstart', showScrollbar);
      el.removeEventListener('touchmove', showScrollbar);
      el.removeEventListener('pointerdown', showScrollbar);
      el.removeEventListener('keydown', handleKeydown);
      el.removeEventListener('mouseleave', () => el.classList.remove('scrolling'));
      clearTimeout(scrollTimer);
      document.documentElement.classList.remove('scrolling');
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
