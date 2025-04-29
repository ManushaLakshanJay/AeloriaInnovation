import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Back to Top Button component
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent/90 text-white flex items-center justify-center z-50 shadow-lg transition-all duration-300 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
      <span className="absolute -inset-1 rounded-full bg-accent opacity-30 animate-pulse-slow"></span>
    </button>
  );
}

function App() {
  // Force dark mode for the entire app
  useEffect(() => {
    // Add dark class to html element to ensure proper theme is applied
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#000';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-background min-h-screen text-foreground">
          <CustomCursor />
          <Toaster />
          <Router />
          <BackToTopButton />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
