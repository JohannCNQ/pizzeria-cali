import { Clock, Flame, MapPin, MessageCircle, Phone, Quote, Star } from 'lucide-react'

const WHATSAPP_NUMBER = '573001234567'

function whatsappLink(message = 'Hola Fuego Caleño, quiero hacer un pedido') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

const pizzas = [
  {
    name: 'Margherita Clásica',
    description: 'Salsa de tomate San Marzano, mozzarella fresca, albahaca y aceite de oliva extra virgen.',
    price: '$38.000',
    image: '/images/pizza-margherita.jpg',
    tag: 'Favorita',
  },
  {
    name: 'La Valluna',
    description: 'Carne desmechada, maduro caramelizado, queso costeño, cebolla morada y cilantro fresco.',
    price: '$45.000',
    image: '/images/pizza-valluna.jpg',
    tag: 'Especial de la casa',
  },
  {
    name: 'Diavola Picante',
    description: 'Pepperoni crujiente, ají de la casa, mozzarella y un toque de miel picante.',
    price: '$42.000',
    image: '/images/pizza-diavola.jpg',
    tag: 'Picante',
  },
]

const testimonials = [
  {
    quote: 'La Valluna es una locura. El maduro con la carne desmechada sobre esa masa crocante... no he probado nada igual en Cali.',
    name: 'Valentina Ríos',
    location: 'Barrio Granada',
  },
  {
    quote: 'Pedí por WhatsApp un viernes a las 9 p.m. y llegó en 25 minutos, caliente y perfecta. Ya es tradición en la casa.',
    name: 'Andrés Castillo',
    location: 'Ciudad Jardín',
  },
  {
    quote: 'Se nota que la masa es de verdad artesanal. La Margherita es sencilla pero impecable. ¡Súper recomendados!',
    name: 'Camila Ospina',
    location: 'San Antonio',
  },
]

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2">
          <Flame className="size-6 text-primary" aria-hidden="true" />
          <span className="font-display text-xl uppercase tracking-wide">Fuego Caleño</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <MapPin className="size-3.5" aria-hidden="true" />
            Hecho en Cali, Valle del Cauca
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
            La pizza con <span className="text-primary">sabor</span> a sucursal del cielo
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Masa madre de 48 horas, horno de leña a 450°C e ingredientes del Valle. Pizzas artesanales que llegan
            calientes a tu puerta.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Ver el menú
            </a>
            <a
              href="#testimonios"
              className="rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Qué dicen de nosotros
            </a>
          </div>
          <dl className="mt-4 flex flex-wrap gap-8 border-t border-border pt-6">
            <div className="flex flex-col-reverse">
              <dt className="text-xs text-muted-foreground">+2.000 reseñas</dt>
              <dd className="flex items-center gap-1.5 font-display text-2xl">
                4.9 <Star className="size-5 fill-accent text-accent" aria-hidden="true" />
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-xs text-muted-foreground">Entrega promedio</dt>
              <dd className="flex items-center gap-1.5 font-display text-2xl">
                30 min <Clock className="size-5 text-primary" aria-hidden="true" />
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
          <div className="absolute inset-6 rounded-full bg-primary/30 blur-2xl" aria-hidden="true" />
          <img
            src="/images/hero-pizza.jpg"
            alt="Pizza artesanal recién salida del horno de leña con mozzarella y albahaca"
            className="relative z-10 h-full w-full rounded-full object-cover shadow-2xl ring-4 ring-primary/30"
          />
        </div>
      </div>
    </section>
  )
}

function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-16 border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Nuestro menú</p>
          <h2 className="font-display text-4xl uppercase sm:text-5xl text-balance">Las tres que nos hicieron famosos</h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Pizzas de 12 pulgadas, 8 porciones. Horneadas al momento en horno de leña.
          </p>
        </div>
        <ul className="grid gap-8 md:grid-cols-3">
          {pizzas.map((pizza) => (
            <li
              key={pizza.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={pizza.image}
                  alt={`Pizza ${pizza.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                  {pizza.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl uppercase">{pizza.name}</h3>
                  <p className="font-display text-xl text-primary">{pizza.price}</p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{pizza.description}</p>
                <a
                  href={whatsappLink(`Hola Fuego Caleño, quiero pedir una pizza ${pizza.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-full border border-primary/50 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Pedir esta pizza
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Testimonios</p>
          <h2 className="font-display text-4xl uppercase sm:text-5xl text-balance">Cali ya lo probó</h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-7">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" role="img" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="size-8 text-primary/30" aria-hidden="true" />
                </div>
                <blockquote className="flex-1 leading-relaxed text-pretty">{`"${t.quote}"`}</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className="flex size-10 items-center justify-center rounded-full bg-primary/15 font-display text-primary"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.location}, Cali</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-16 border-t border-border bg-card/40 pb-32 pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2">
            <Flame className="size-6 text-primary" aria-hidden="true" />
            <span className="font-display text-xl uppercase tracking-wide">Fuego Caleño</span>
          </p>
          <p className="text-sm text-muted-foreground">Pizzería artesanal al horno de leña desde 2018.</p>
        </div>
        <address className="flex flex-col gap-3 text-sm not-italic text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Calle 9 #4-25, Barrio Granada, Cali
          </span>
          <span className="flex items-center gap-2">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            +57 300 123 4567
          </span>
        </address>
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Clock className="mt-0.5 size-4 text-primary" aria-hidden="true" />
          <p>
            Lunes a jueves: 12:00 – 22:00
            <br />
            Viernes a domingo: 12:00 – 23:30
          </p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fuego Caleño. Todos los derechos reservados.
      </p>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 font-semibold text-background shadow-2xl shadow-whatsapp/30 ring-4 ring-whatsapp/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:bottom-8 sm:right-8"
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-background/40" aria-hidden="true" />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </span>
      Pedir por WhatsApp
    </a>
  )
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <Testimonials />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
