
import { HandHeart, Users, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function CsrInitiativePage() {
  return (
    <div className="bg-background text-foreground animate-fade-in">
      <section className="py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">CSR Initiative</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Giving back to the community is at the heart of what we do. Explore our commitment to Corporate Social Responsibility.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl animate-fade-in-left">
              <Image src="https://picsum.photos/seed/csr/800/600" alt="CSR Initiative" fill className="object-cover" data-ai-hint="community volunteering" />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-3xl font-bold mb-4">Making a Difference Together</h2>
              <p className="text-lg text-muted-foreground">
                At Tishha, we believe that business success and social responsibility go hand in hand. Our CSR initiatives are focused on creating a positive and lasting impact on society and the environment. We are dedicated to supporting causes that matter to our employees, clients, and communities.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <HandHeart className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Community Health Programs</h3>
                    <p className="text-muted-foreground">We partner with local organizations to provide free health check-ups and awareness campaigns in underserved areas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Environmental Sustainability</h3>
                    <p className="text-muted-foreground">Our green initiatives include tree plantation drives, waste reduction programs, and promoting sustainable practices in our operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Employee Volunteering</h3>
                    <p className="text-muted-foreground">We encourage and support our employees to volunteer their time and skills for causes they are passionate about.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
