import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="section-light geometric-pattern min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent-bright/20 animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-l from-accent-bright/15 to-primary/10 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-hero mb-6 font-extrabold">
            <span className="block">Sophisticated</span>
            <span className="block text-glow">Section Transitions</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            Experience seamless visual storytelling through advanced CSS animations 
            and React component architecture
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`} style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Transitions
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${
          isVisible ? 'animate-fade-in-delayed' : 'opacity-0'
        }`} style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm font-medium uppercase tracking-wider">Scroll to Experience</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};