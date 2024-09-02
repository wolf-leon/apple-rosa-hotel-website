import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
        </div>
      </section> */}
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
  <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
    About Us
  </h2>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[64rem] px-4">
    <div className="flex flex-col max-w-[32rem]">
      <p className="text-center text-[1rem] md:text-[1.25rem]">
        Founded with a passion for hospitality and a love for the rich culinary traditions of Goa, Apple Rosa is more than just a hotel; it&apos;s a home away from home. We believe in creating spaces where guests can relax, savor delicious food, and enjoy warm, genuine service.
      </p>
      
      <p className="mt-4 text-center text-[1rem] md:text-[1.25rem]">
        Our story began in the heart of South Goa, where we envisioned a place that combines modern comforts with the timeless charm of our region. Today, Apple Rosa is proud to offer an experience that reflects the essence of Goan culture, with every dish, room, and service crafted to perfection.
      </p>
    </div>
    
    <div className="flex justify-center items-center">
      <Image
        isBlurred
        width={250}
        src="/apple-rosa.png"
        alt="Hotel Front Image"
      />
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[64rem] px-4 mt-8">
    <div className="flex justify-center items-center">
      <Image
        isBlurred
        width={300}
        height={250}
        src="/exterior.png"
        alt="Our Team Image"
      />
    </div>

    <div className="flex flex-col max-w-[32rem]">
      <p className="text-center text-[1rem] md:text-[1.25rem]">
        At Apple Rosa, we are a family. Our dedicated team works tirelessly to ensure that every guest feels welcome and cared for. From the warm smiles at the front desk to the meticulous attention of our chefs, we are committed to making your stay unforgettable.
      </p>

      <p className="mt-4 text-center text-[1rem] md:text-[1.25rem]">
        Whether you&apos;re here for a quiet retreat, a family vacation, or a special event, our mission is to provide a sanctuary where you can unwind, savor, and connect with the beauty of Goa. Welcome to Apple Rosa.
      </p>
    </div>
  </div>
</section>

    </DefaultLayout>
  );
}
