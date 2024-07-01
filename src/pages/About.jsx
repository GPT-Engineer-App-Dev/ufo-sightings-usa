import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              UFO Sightings USA is dedicated to documenting and sharing information about UFO sightings across the United States. Our mission is to provide a platform for witnesses to share their experiences and to promote awareness about the phenomenon.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;