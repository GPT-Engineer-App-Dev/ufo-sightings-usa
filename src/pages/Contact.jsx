import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>

      <section>
        <form className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;