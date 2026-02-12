// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import GetStarted from "./pages/GetStarted";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <div className="flex-1">
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/get-started" element={<GetStarted />} />
//               <Route path="/contact" element={<Contact />} />
//               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//           <Footer />
//           <WhatsAppButton />
//         </div>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import ScrollToTop from "./components/ScrollToTop"; // Ensure this file exists
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import GetStarted from "./pages/GetStarted";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         {/* This component handles scrolling to top automatically on every navigation */}
//         <ScrollToTop /> 
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <div className="flex-1">
//             <Routes>
//               <Route path="/" element={<Index />} />
//               {/* Updated paths to match footer link generation logic */}
//               <Route path="/about-us" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/get-started" element={<GetStarted />} />
//               <Route path="/contact-us" element={<Contact />} />
              
//               {/* Catch-all route for 404 */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//           <Footer />
//           <WhatsAppButton />
//         </div>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> 
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Index />} />
              
              {/* FIXED: Changed "/about-us" to "/about" to match your Navbar links */}
              <Route path="/about" element={<About />} />
              
              {/* Services Page */}
              <Route path="/services" element={<Services />} />
              
              {/* Get Started Page */}
              <Route path="/get-started" element={<GetStarted />} />
              
              {/* FIXED: Changed "/contact-us" to "/contact" to match your Navbar links */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;