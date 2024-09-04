import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title()}>Book Rooms</h1>
          <p className="mt-4 text-lg">
            Experience comfort and luxury at Hotel Apple Rosa. Our rooms are designed to provide a relaxing
            environment for both business and leisure travelers. Whether you&apos;re looking for a cozy single room
            or a spacious suite, we have a variety of options to suit your needs. 
            <br />
            <br />
            To book a room, please visit our booking page, where you can check availability, choose your preferred 
            room type, and make a reservation. We recommend booking in advance to secure your stay, especially 
            during peak seasons.
            <br />
            <br />
            If you have any special requests or need assistance with your booking, feel free to contact our 
            customer service team, who are always ready to help make your stay as comfortable as possible.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
