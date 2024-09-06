import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import BlurFade from "@/components/magicui/blur-fade";

const images = Array.from({ length: 10 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `/room-${i + 1}.png`;
});

const bookingSites = [
  { src: "/justdial.png", alt: "JustDial", href: "https://www.justdial.com/Goa/Hotel-Apple-Rosa-Opposite-ESI-HospitalColmorod-Margao/0832PX832-X832-211108130245-R1P3_BZDET" },
  { src: "/goibibo.png", alt: "GoIbibo", href: "https://www.goibibo.com/hotels/apple-rosa-hotel-in-goa-678651733376496019/" },
  { src: "/makemytrip.png", alt: "MakeMyTrip", href: "https://www.makemytrip.com/hotels/hotel_apple_rosa-details-goa.html?srsltid=AfmBOopLnfnUJaDihI5RcE60MkBmNqJVcEl852tQ4LMLczgWiNUL00zm" },
  { src: "/yatra.png", alt: "Yatra", href: "https://www.yatra.com/hotels/hotels-in-goa/hotel-apple-rosa" },
  { src: "/tripadvisor.png", alt: "TripAdvisor", href: "https://www.tripadvisor.in/Hotel_Review-g1152662-d23959826-Reviews-Hotel_Apple_Rosa-Margao_South_Goa_District_Goa.html" },
  { src: "/trivago.jpg", alt: "Tricago", href: "https://www.trivago.in/en-IN/oar/hotel-apple-rosa-margao?search=100-9375626" }
];

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
          </p>

          <section id="photos" className="my-4">
            <div className="my-4 columns-2 gap-4 sm:columns-3">
              {images.map((imageUrl, idx) => (
                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                  <img
                    className="mb-4 size-full rounded-lg object-contain"
                    src={imageUrl}
                    alt={`Local Room ${idx + 1}`}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title()}>For Booking</h1>
          <p className="mt-4 text-lg">
            To book a room, please visit our booking page, where you can check availability, choose your preferred 
            room type, and make a reservation. We recommend booking in advance to secure your stay, especially 
            during peak seasons.
            <br />
            <br />
            If you have any special requests or need assistance with your booking, feel free to contact our 
            customer service team, who are always ready to help make your stay as comfortable as possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {bookingSites.map((site) => (
              <a
                key={site.alt}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-40 md:w-48"
              >
                <Image
                  width={250}
                  alt={site.alt}
                  src={site.src}
                  style={{ filter: 'grayscale(100%)', width: '100%', height: 'auto' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
