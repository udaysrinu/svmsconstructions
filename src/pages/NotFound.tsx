import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-dark">
        <div className="text-center">
          <h1 className="text-8xl font-heading font-bold text-gold mb-4">404</h1>
          <p className="text-xl text-cream/60 font-body mb-8">
            This page doesn't exist
          </p>
          <Link
            to="/"
            className="inline-block bg-gold text-white rounded-full px-8 py-3 font-body font-semibold hover:bg-gold/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
