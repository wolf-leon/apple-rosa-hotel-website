import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import BlurFade from "@/components/magicui/blur-fade";

const images = Array.from({ length: 7 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `/${i + 1}.png`;
});

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-3xl text-center justify-center">
          <h1 className={title()}>Party and Events</h1>
          <p className="mt-4 text-lg my-4">
            Welcome to Hotel Apple Rosa&apos;s Party Hall, the perfect venue for your special occasions. 
            Whether you&apos;re planning a birthday celebration, corporate event, or wedding reception, our 
            Party Hall offers a versatile space that can be tailored to your needs. With a variety of events 
            hosted throughout the year, we ensure that every gathering is a memorable experience.
          </p>
        </div>
      </section>
      <section id="photos">
        <div className="my-4 columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Local restaurant ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
