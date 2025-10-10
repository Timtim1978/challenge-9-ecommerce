import Hero from '../components/hero/Hero';
import FeaturedProducts from '../components/featured/FeaturedProducts';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section className='pt-[84px]'>
        <Hero />
      </section>

      <FeaturedProducts />

      <Footer />
    </main>
  );
}
