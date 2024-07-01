import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Sightings = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">All UFO Sightings</h1>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Sightings List</CardTitle>
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
              <Separator />
              <li>
                <p className="font-semibold">June 10, 2023 - Los Angeles, CA</p>
                <p className="text-muted-foreground">A fast-moving object was seen in the night sky.</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Sightings;