
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-cream py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-coffee-700 mb-4">404</h1>
          <p className="text-xl text-coffee-600 mb-8">Oops! We couldn't find the page you're looking for.</p>
          <div className="max-w-md mx-auto mb-8">
            <p className="text-coffee-500">
              Maybe you were looking for a specific coffee blend that's not on our menu yet, 
              or perhaps the page has moved. Let's get you back to browsing our delicious coffees.
            </p>
          </div>
          <Button asChild className="bg-coffee-500 hover:bg-coffee-600">
            <Link to="/">Back to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
