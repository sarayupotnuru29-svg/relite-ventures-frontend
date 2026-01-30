import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom text-center py-20">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-accent mb-4">404</h1>
        <h2 className="heading-section mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
