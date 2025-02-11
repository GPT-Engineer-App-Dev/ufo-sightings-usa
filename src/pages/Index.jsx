import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Sightings in the USA</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the ultimate resource for UFO sightings across the United States.
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sightings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">March 15, 2023 - Roswell, NM</p>
                <p className="text-muted-foreground">A bright light was seen hovering over the desert.</p>
              </li>
              <Separator />
              <li>
                <p className="font-semibold">April 22, 2023 - Area 51, NV</p>
                <p className="text-muted-foreground">Multiple witnesses reported seeing a flying saucer.</p>
              </li>
              <Separator />
              <li>
                <p className="font-semibold">May 5, 2023 - Phoenix, AZ</p>
                <p className="text-muted-foreground">Strange lights were observed moving in a triangular formation.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-muted-foreground">
        <p>Contact us at info@ufosightingsusa.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default Index;