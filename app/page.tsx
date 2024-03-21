import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#FFA500] p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              alt="Logo"
              className="h-12 w-12"
              height="50"
              src="/ic_logo.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "contain",
              }}
              width="50"
            />
            <nav className="hidden md:flex space-x-4">
              <a className="hover:underline" href="#">
                Home
              </a>
              <a className="hover:underline" href="#">
                About Us
              </a>
              <a className="hover:underline" href="#">
                Services
              </a>
              <a className="hover:underline" href="#">
                Projects
              </a>
              <a className="hover:underline" href="#">
                Why Choose Us
              </a>
              <a className="hover:underline" href="#">
                Testimonials
              </a>
              <a className="hover:underline" href="#">
                Blog
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <p>Our Location: Delhi NCR, India</p>
              <p>Toll Free: 1800 123 123</p>
            </div>
            <Button className="bg-white text-[#FFA500]">Inquire Now</Button>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-[#FFA500] text-white p-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                alt="Construction Worker"
                className="rounded-full mx-auto"
                height="300"
                src="/man.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-4xl font-bold mb-4">GREAT POTENTIAL MAJDUR</h1>
              <p className="mb-4">
                We bring visions to life, with a commitment to quality craftsmanship, innovative design, and client
                satisfaction. We are your trusted partner in construction excellence.
              </p>
              <Button className="bg-white text-[#FFA500]">Enquire Now</Button>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto text-black">
            <h2 className="text-3xl font-bold text-center mb-6">OUR SERVICES</h2>
            <p className="text-center mb-8">Revitalize Your Space With Our Renovation And Remodeling Services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Residential Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Residential construction is an area that requires expertise and precision. Our residential
                    construction services cover everything from design to completion.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Commercial Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Whether you're looking to construct a new office building, retail space, or industrial facility, our
                    commercial construction services cover everything.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto text-black">
            <h2 className="text-3xl font-bold text-center mb-6">OUR GALLERY</h2>
            <p className="text-center mb-8">Revitalize Your Space With Our Renovation And Remodeling Services.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img
                alt="Gallery Image 1"
                className="rounded-md mx-auto"
                height="200"
                src="/Gallary1.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery Image 2"
                className="rounded-md mx-auto"
                height="200"
                src="/Gallary2.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Gallery Image 3"
                className="rounded-md mx-auto"
                height="200"
                src="/Gallary3.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#FFA500] text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Majdur Adda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

