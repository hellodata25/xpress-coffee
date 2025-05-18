
import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Location = {
  id: number;
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
  hours: string;
  distance?: string;
};

const locations: Location[] = [
  {
    id: 1,
    name: "Xpress Coffee Cape Town",
    address: "123 Long Street",
    city: "Cape Town",
    phoneNumber: "021 123 4567",
    hours: "7am - 7pm",
    distance: "0.5 km"
  },
  {
    id: 2,
    name: "Xpress Coffee Johannesburg",
    address: "456 Jan Smuts Avenue",
    city: "Johannesburg",
    phoneNumber: "011 987 6543",
    hours: "7am - 7pm",
    distance: "2.1 km"
  },
  {
    id: 3,
    name: "Xpress Coffee Durban",
    address: "789 Florida Road",
    city: "Durban",
    phoneNumber: "031 345 6789",
    hours: "8am - 6pm",
    distance: "5.3 km"
  },
  {
    id: 4,
    name: "Xpress Coffee Stellenbosch",
    address: "101 Dorp Street",
    city: "Stellenbosch",
    phoneNumber: "021 765 4321",
    hours: "8am - 6pm",
    distance: "7.8 km"
  },
  {
    id: 5,
    name: "Xpress Coffee Sandton",
    address: "25 Fredman Drive",
    city: "Johannesburg",
    phoneNumber: "011 883 9921",
    hours: "7am - 7pm",
    distance: "4.3 km"
  }
];

const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  const filteredLocations = searchQuery.trim() === "" 
    ? locations 
    : locations.filter(location => 
        location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-700 mb-4">Find A Location</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            Visit one of our coffee shops across South Africa or find a pickup point near you.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-coffee-400" />
            <Input
              type="text"
              placeholder="Search by city or location name"
              className="pl-10 border-coffee-300 focus:border-coffee-500 focus:ring-coffee-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 md:h-auto bg-gray-200 rounded-lg relative overflow-hidden">
            {/* This would be a map in a real implementation */}
            <div className="absolute inset-0 bg-coffee-800/10 flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin className="h-12 w-12 text-coffee-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-coffee-700 mb-2">Interactive Map</h3>
                <p className="text-coffee-600">
                  This would be an interactive map in a real implementation. For now, please use the location list to find the nearest Xpress Coffee.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {filteredLocations.map((location) => (
              <Card 
                key={location.id} 
                className={`border-l-4 transition-all ${
                  activeLocation?.id === location.id 
                    ? "border-l-coffee-500 bg-coffee-50" 
                    : "border-l-transparent hover:border-l-coffee-300"
                }`}
                onClick={() => setActiveLocation(location)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-coffee-700">{location.name}</h3>
                      <p className="text-sm text-coffee-600">{location.address}, {location.city}</p>
                      <div className="mt-2 flex items-center gap-4 text-sm text-coffee-600">
                        <span>{location.phoneNumber}</span>
                        <span>{location.hours}</span>
                      </div>
                    </div>
                    {location.distance && (
                      <div className="text-coffee-500 text-sm font-medium">
                        {location.distance}
                      </div>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <Button variant="outline" size="sm" className="border-coffee-300 text-coffee-600 hover:bg-coffee-100">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredLocations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-coffee-600">No locations found. Please try another search term.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFinder;
