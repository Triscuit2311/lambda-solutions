import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder-g3b3JDaO0PXLKnxHJh3k7w8GLZtvn0.jpeg"
              alt="Founder with his Mazda Miata"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-burgundy">
              Meet The Founder
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-crimson">
              Dante Trisciuzzi
            </h3>
            <p className="text-secondary mb-4">
              A USMC veteran and automotive enthusiast, with nearly two decades
              of experience building performance software.
            </p>
            <p className="text-secondary mb-4">
              Dante has a passion for cars and motorsports in general. He has
              expertise in electrical engineering, software engineering, systems
              design, and engine tuning. He loves fabrication, suspension, and
              obviously: math!
            </p>
            <p className="text-secondary">
              Our mission is to keep cars fun; we build tools to achieve peak
              performance on the track, in the dirt, and on the way to the
              grocery store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
