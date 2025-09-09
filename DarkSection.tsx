import { useScrollAnimation, useParallaxEffect } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export const DarkSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const parallax1 = useParallaxEffect(0.3);
  const parallax2 = useParallaxEffect(-0.2);

  return (
    <section
      ref={ref}
      className="section-dark min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Complex background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Parallax background shapes */}
        <div 
          ref={parallax1.ref}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-accent-bright/20 to-transparent blur-3xl"
          style={parallax1.style}
        />
        <div 
          ref={parallax2.ref}
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary-glow/30 to-transparent blur-2xl"
          style={parallax2.style}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--foreground-light)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground-light)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating geometric elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 border border-accent-bright/30 transform rotate-45 animate-float`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-hero mb-8 font-extrabold">
            <span className="block opacity-90">Immersive</span>
            <span className="block text-glow">Dark Experience</span>
          </h2>

          <p className={`text-xl md:text-2xl text-foreground-light/80 mb-12 max-w-4xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            Where sophisticated design meets cutting-edge technology. 
            Each transition tells a story through motion, color, and interaction.
          </p>

          {/* Feature grid */}
          <div className={`grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            {[
              {
                title: 'Performance Optimized',
                description: 'Hardware-accelerated animations ensuring smooth 60fps experiences across all devices',
                icon: '⚡',
              },
              {
                title: 'Responsive Design',
                description: 'Fluid transitions that adapt beautifully to any screen size or orientation',
                icon: '📱',
              },
              {
                title: 'Cross-Browser Compatible',
                description: 'Graceful fallbacks and progressive enhancement for universal compatibility',
                icon: '🌐',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-foreground-light/5 backdrop-blur-sm border border-foreground-light/10 hover:bg-foreground-light/10 transition-all duration-300 animate-slide-in-left`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="text-4xl mb-4 animate-glow-pulse">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground-light">{feature.title}</h3>
                <p className="text-foreground-light/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '1s' }}>
            <Button 
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 bg-foreground-light text-background-dark hover:bg-foreground-light/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-2 border-foreground-light/30 text-foreground-light hover:bg-foreground-light/10 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-foreground-light/30 to-transparent" />
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-foreground-light/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};