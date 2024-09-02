import React from "react";
import BoxReveal from "@/components/magicui/box-reveal";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Snippet } from "@nextui-org/snippet";

export default function DocsPage() {
  return (
    <DefaultLayout>
      
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-center">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-[64rem] px-4">
          {/* Card 1: WhatsApp Contact */}
          <BoxReveal boxColor={"#25D366"} duration={0.5}>
            <div
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg bg-white text-center"
            >
              <FaWhatsapp className="text-4xl mb-4 text-[#25D366]" />
              <h3 className="text-xl font-semibold my-2">WhatsApp Contact</h3>

              <Link
              href={siteConfig.links.whatsapp}
              className="my-4"
            >
              <Button color="success" radius="full">
              <h3 className="text-xl font-semibold my-6">WhatsApp Message</h3>
              </Button>  
            </Link>
              <p className="my-4 text-center text-[1rem] md:text-[1.25rem]">
                Reach us instantly on WhatsApp for quick queries and support.
              </p>
            </div>
          </BoxReveal>

          {/* Card 2: Phone Call */}
          <BoxReveal boxColor={"#007BFF"} duration={1}>
            <div
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg bg-white text-center"
            >
              <FaPhone className="text-4xl mb-4 text-[#007BFF]" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <Snippet hideSymbol size="lg" className="my-4">{siteConfig.links.phone_number}</Snippet>
              <p className=" my-4 text-center text-[1rem] md:text-[1.25rem]">
                Give us a call for any inquiries or reservations. We&apos;re here to help!
              </p>
            </div>
          </BoxReveal>
        </div>
      </section>
      <Divider className="my-4" />
      <section className="flex flex-col items-center justify-center py-8 md:py-10">
        <h2 className="my-6 text-[2rem] md:text-[2.5rem] font-semibold text-center">
          {siteConfig.name} Location
        </h2>
        <div className="w-full max-w-[64rem]">
          <iframe  className="w-full aspect-w-16 aspect-h-9" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15395.98999165185!2d73.9649054!3d15.2679323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3c129ca0305%3A0xb82b9be4e4534c89!2sHotel%20Apple%20Rosa!5e0!3m2!1sen!2sin!4v1725218357893!5m2!1sen!2sin" 
          style={{ border: 0 }}
          width="100%"
          height="400"
          loading="lazy" 
          title="Google Maps Location"
          >
          </iframe>
        </div>
      </section>
    </DefaultLayout>
  );
}
