import Image from "next/image"

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
            <h2 className="text-3xl font-bold mb-4 text-burgundy">Meet Our Founder</h2>
            <h3 className="text-xl font-semibold mb-2 text-crimson">John Lambda</h3>
            <p className="text-secondary mb-4">
              A veteran and automotive enthusiast with over 20 years of experience in software engineering and
              motorsports.
            </p>
            <p className="text-secondary mb-4">
              John's passion for racing and technology led him to create Lambda Solutions, combining cutting-edge
              software development with the high-octane world of motorsports.
            </p>
            <p className="text-secondary">
              His mission is to push the boundaries of what's possible in racing, providing teams with the tools they
              need to achieve peak performance on and off the track.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

