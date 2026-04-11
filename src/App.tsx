import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Menu, X, Instagram, Twitter, Mail, ArrowRight, MapPin, Calendar, Ruler } from 'lucide-react'

// Artwork data
const artworks = [
  {
    id: 1,
    title: "COURAGE",
    medium: "Charcoal, Acrylic and Oil on canvas",
    year: "2025",
    size: "45 x 45 inches",
    description: "This work explores the strength required to confront fear and endure internal battles. The figure's sharp tooth and sword-like elements symbolize defense, resilience, and the will to persist. Through bold, symbolic forms and raw charcoal textures, the piece reflects psychological struggle and the unwavering courage needed to stand firm and not back down.",
    image: "/images/Courage.jpg"
  },
  {
    id: 2,
    title: "COURAGE II",
    medium: "Charcoal, Acrylic and Oil on Canvas",
    year: "2025",
    size: "45 x 45 inches",
    description: "This work explores the strength it takes to live and express oneself without apology. This piece reflects individuality and presence, it captures the quiet and powerful courage found in embracing identity, encouraging confidence in being true to oneself.",
    image: "/images/courage2.jpg"
  },
  {
    id: 3,
    title: "Voices in My Head",
    medium: "Charcoal, Acrylic and oil on canvas",
    year: "2025",
    size: "24 x 24 inches",
    description: "This piece explores the tension within the human mind, where conflicting thoughts create confusion and emotional unrest. The figure is surrounded by internal voices representing doubt, pressure, and expectation. It reflects the struggle to find clarity and peace while navigating the overwhelming noise that shapes our perception and sense of self.",
    image: "/images/IMG_8302.JPG.jpeg"
  },
  {
    id: 4,
    title: "Monitoring Spirits",
    medium: "Charcoal, Acrylic and oil on canvas",
    year: "2025",
    size: "24 x 24 inches",
    description: "This work reflects the feeling of being watched and the psychological weight of unseen forces tracking one's progress. It draws from shared beliefs about village ties and unseen presence, capturing the tension between growth and perceived resistance. The piece explores vigilance, pressure, and the struggle to move forward without being pulled back.",
    image: "/images/IMG_0490.jpg"
  },
  {
    id: 5,
    title: "Lengthy Conversations I&II",
    medium: "Charcoal and Acrylic on canvas",
    year: "2025",
    size: "20 x 20 inches",
    description: "This pair captures the feeling of deep, uninterrupted conversation, where time and surroundings fade away. It explores the quiet intimacy of human interaction and the moments that allow us to exist fully in shared experience.",
    image: "/images/IMG_6416.PNG"
  },
  {
    id: 6,
    title: "Lengthy Conversations I&II",
    medium: "Charcoal and Acrylic on canvas",
    year: "2025",
    size: "20 x 20 inches",
    description: "This pair captures the feeling of deep, uninterrupted conversation, where time and surroundings fade away. It explores the quiet intimacy of human interaction and the moments that allow us to exist fully in shared experience.",
    image: "/images/IMG_6417.PNG"
  },
  {
    id: 7,
    title: "BALLER",
    medium: "Charcoal and Acrylic on canvas",
    year: "2025",
    size: "12 x 13 inches",
    description: "This piece captures the dream of becoming a professional footballer through the character Mutiu. Inspired by the ambition to reach greatness like Lionel Messi, it reflects determination, hope, and the pursuit of success. It speaks to every dreamer striving to rise beyond limitations and be seen on a global stage.",
    image: "/images/IMG_8303.JPG.jpeg"
  },
  {
    id: 8,
    title: "Beauty and the Beholder",
    medium: "Acrylic and Oil on canvas",
    year: "2025",
    size: "12 x 13 inches",
    description: "This work explores the idea of beauty as something subjective and ever-changing, shaped by individual perception. Through bold, symbolic forms and raw charcoal textures, it reflects how people see and interpret beauty differently. The piece invites viewers to question their understanding of beauty and recognize its diversity.",
    image: "/images/IMG_0529.jpg"
  },
  {
    id: 9,
    title: "Selfie",
    medium: "Charcoal, Acrylic and oil on canvas",
    year: "2026",
    size: "24 x 24 inches",
    description: "This piece captures three women sharing a moment as they take a selfie. It reflects connection, confidence, and self-expression in the digital age. Beyond the image, it explores how we choose to present ourselves, highlighting friendship, identity, and the joy of capturing memories through our own lens.",
    image: "/images/IMG_8195.jpg"
  },
  {
    id: 10,
    title: "Her Poise",
    medium: "Charcoal, Acrylic and Oil on canvas",
    year: "2026",
    size: "30 x 30 inches",
    description: "This piece captures three women posing confidently for a group portrait, embodying strength, elegance, and self-assurance. It celebrates body positivity and the beauty of individuality, highlighting the power of presence and confidence. Through their stance and unity, the work reflects pride in self and comfort in one's own skin.",
    image: "/images/IMG_8194.jpg"
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'gallery', ref: galleryRef },
        { id: 'services', ref: servicesRef },
        { id: 'contact', ref: contactRef }
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    setIsMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openArtworkModal = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeArtworkModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="section-padding py-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef) }} className="font-oswald text-xl font-bold tracking-wider">
            MAYOWA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home', ref: homeRef },
              { id: 'about', label: 'About', ref: aboutRef },
              { id: 'gallery', label: 'Gallery', ref: galleryRef },
              { id: 'services', label: 'Services', ref: servicesRef },
              { id: 'contact', label: 'Contact', ref: contactRef }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${activeSection === item.id ? 'text-black' : 'text-gray-500 hover:text-black'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="section-padding py-6 flex flex-col gap-4">
            {[
              { id: 'home', label: 'Home', ref: homeRef },
              { id: 'about', label: 'About', ref: aboutRef },
              { id: 'gallery', label: 'Gallery', ref: galleryRef },
              { id: 'services', label: 'Services', ref: servicesRef },
              { id: 'contact', label: 'Contact', ref: contactRef }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className="text-left text-lg font-oswald font-medium py-2 border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} id="home" className="relative min-h-screen flex items-center bg-[#f6f6f6]">
        <div className="section-padding w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="md:pt-12">
              <p className="caption mb-4 opacity-0 animate-fade-in-up">Visual Artist</p>
              <h1 className="heading-xl mb-6 opacity-0 animate-fade-in-up animation-delay-100">
                FATIMAH MAYOWA OLATILEWA
              </h1>
              <p className="body-lg text-gray-700 mb-8 max-w-md opacity-0 animate-fade-in-up animation-delay-200">
                Exploring the intersection of organic form and digital noise. Creating art that speaks to the soul and challenges perception.
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-300">
                <button onClick={() => scrollToSection(galleryRef)} className="btn-primary">
                  View Selected Works
                  <ArrowRight size={16} className="ml-2" />
                </button>
                <button onClick={() => scrollToSection(aboutRef)} className="btn-outline">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/IMG_8303.JPG.jpeg"
                  alt="Fatimah Mayowa Olatilewa"
                  className="w-full h-full object-cover animate-breathe"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator opacity-0 animate-fade-in animation-delay-500" />
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 md:py-32 bg-[#f6f6f6]">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/Mayowa.jpeg"
                  alt="Fatimah Mayowa Olatilewa in studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-xs">
                <p className="font-oswald text-4xl font-bold">15+</p>
                <p className="text-sm text-gray-500">Years of artistic journey</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:pt-12">
              <p className="caption mb-4">About the Artist</p>
              <h2 className="heading-lg mb-8">CRAFTING VISUAL<br />NARRATIVES</h2>

              {/* Bio */}
              <div className="mb-10">
                <h3 className="font-oswald text-xl font-medium mb-4">Artist Biography</h3>
                <p className="body-md text-gray-600 mb-4">
                  Fatimah Mayowa Olatilewa is a Nigerian visual artist based in Lagos, whose work explores the courage it takes to live life fully. Her practice draws from the physical, emotional, and spiritual realities of everyday experience, reflecting on how people navigate life with resilience and presence.
                </p>
                <p className="body-md text-gray-600 mb-4">
                  Working with charcoal, acrylic, and oil on canvas, she creates stylized human figures with raw, unblended bodies and distinctive facial forms. Her figures often feature shaded square heads with bold red outlines and exaggerated eyes, functioning as symbolic expressions rather than realistic portraits. This approach resonates with Yoruba artistic traditions, where figures and masks are used to convey meaning beyond physical likeness.
                </p>
                <p className="body-md text-gray-600">
                  Influenced by the intensity and rhythm of life in Lagos, her work captures movement, emotion, and the psychology of survival. With subtle references to fashion in her compositions, she invites viewers to embrace boldness and find strength in everyday life.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-oswald text-xl font-medium mb-4">Mission Statement</h3>
                <p className="body-md text-gray-600 mb-4">
                  My work explores the courage and psychology of being oneself unapologetically through the lens of everyday life. Growing up in Lagos has exposed me to constant movement, pressure, and survival, shaping the way I observe people navigating personal and shared struggles while still finding moments of joy.
                </p>
                <p className="body-md text-gray-600 mb-4">
                  I create stylized human figures that reflect these experiences. The square heads represent the mental and social boxes people confine themselves within. The bold red outlines suggest fragility and the boundaries we hesitate to cross, while the large oval eyes reflect perception—how we see the world and how it shapes us. The raw, unblended charcoal bodies reject fixed identity, allowing viewers to connect beyond race or background.
                </p>
                <p className="body-md text-gray-600">
                  Influenced by Yoruba artistic traditions, my use of symbolic forms draws from a history of storytelling beyond realism. Through my work, I aim to remind viewers that they are not alone and to embrace living authentically and courageously.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div>
                  <p className="font-oswald text-3xl font-bold">50+</p>
                  <p className="text-sm text-gray-500">Exhibitions</p>
                </div>
                <div>
                  <p className="font-oswald text-3xl font-bold">200+</p>
                  <p className="text-sm text-gray-500">Artworks</p>
                </div>
                <div>
                  <p className="font-oswald text-3xl font-bold">12</p>
                  <p className="text-sm text-gray-500">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="py-20 md:py-32">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="caption mb-4">Portfolio</p>
            <h2 className="heading-lg">SELECTED WORKS</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artworks.map((artwork, index) => {
              // Special handling for artworks 5 & 6 - combined display
              if (artwork.id === 5) {
                const artwork6 = artworks.find(a => a.id === 6);
                return (
                  <div
                    key="combined-5-6"
                    className="group cursor-pointer card-hover col-span-2"
                    onClick={() => openArtworkModal(artwork)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[2/1] overflow-hidden bg-gray-100 mb-4 flex">
                      <div className="w-1/2 overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="w-1/2 overflow-hidden">
                        <img
                          src={artwork6?.image}
                          alt={artwork6?.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-oswald text-lg font-medium group-hover:underline">{artwork.title}</h3>
                      <p className="text-sm text-gray-500">{artwork.medium}, {artwork.year}</p>
                    </div>
                  </div>
                );
              }
              // Skip artwork 6 since it's combined with 5
              if (artwork.id === 6) return null;

              // Regular artwork display
              return (
                <div
                  key={artwork.id}
                  className="group cursor-pointer card-hover"
                  onClick={() => openArtworkModal(artwork)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-oswald text-lg font-medium group-hover:underline">{artwork.title}</h3>
                    <p className="text-sm text-gray-500">{artwork.medium}, {artwork.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 md:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Services</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto">
              Bringing unique artistic visions to life through commissions, collaborations, and custom projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Custom Commissions */}
            <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-oswald text-xl font-medium mb-4">Custom Commissions</h3>
              <p className="text-gray-600 mb-6">
                Bespoke artwork created specifically for your space, vision, and aesthetic preferences.
              </p>
              <button className="text-black font-oswald font-medium hover:underline">Request quote</button>
            </div>

            {/* Murals & Large-Scale Works */}
            <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-oswald text-xl font-medium mb-4">Murals & Large-Scale Works</h3>
              <p className="text-gray-600 mb-6">
                Transform commercial and residential spaces with impactful large-format pieces.
              </p>
              <button className="text-black font-oswald font-medium hover:underline">Request quote</button>
            </div>

            {/* Brand Collaborations */}
            <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
              <h3 className="font-oswald text-xl font-medium mb-4">Brand Collaborations</h3>
              <p className="text-gray-600 mb-6">
                Creative partnerships for campaigns, product design, and experiential installations.
              </p>
              <button className="text-black font-oswald font-medium hover:underline">Request quote</button>
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={() => scrollToSection(contactRef)} className="btn-primary">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 md:py-32">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="caption mb-4">Get in Touch</p>
            <h2 className="heading-lg mb-6">LET'S CREATE<br />TOGETHER</h2>
            <p className="body-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you're interested in commissioning a piece, purchasing existing work, or collaborating on a project, I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:hello@elenavoss.art" className="btn-primary">
                <Mail size={18} className="mr-2" />
                hello@elenavoss.art
              </a>
            </div>

            <div className="flex items-center justify-center gap-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@elenavoss.art" className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all">
                <Mail size={20} />
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Open for Commissions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-oswald text-lg font-bold tracking-wider">MAYOWA</p>
            <p className="text-sm text-gray-400">© 2026 Fatimah Mayowa Olatilewa. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Artwork Modal */}
      {isModalOpen && selectedArtwork && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeArtworkModal}
        >
          <div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="aspect-[3/4] md:aspect-auto">
                {(selectedArtwork.id === 5 || selectedArtwork.id === 6) ? (
                  // Combined display for artworks 5 & 6
                  <div className="w-full h-full flex">
                    <div className="w-1/2 overflow-hidden">
                      <img
                        src={artworks.find(a => a.id === 5)?.image}
                        alt={artworks.find(a => a.id === 5)?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2 overflow-hidden">
                      <img
                        src={artworks.find(a => a.id === 6)?.image}
                        alt={artworks.find(a => a.id === 6)?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  // Regular single image display
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col">
                <button
                  onClick={closeArtworkModal}
                  className="self-end p-2 hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="flex-1">
                  <h3 className="heading-md mb-2">{selectedArtwork.title}</h3>
                  <p className="text-gray-500 mb-6">{selectedArtwork.medium}, {selectedArtwork.year}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <Ruler size={18} className="text-gray-400" />
                      <span>{selectedArtwork.size}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={18} className="text-gray-400" />
                      <span>{selectedArtwork.year}</span>
                    </div>
                  </div>
                  
                  <p className="body-md text-gray-600 leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="btn-primary w-full"
                  >
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
