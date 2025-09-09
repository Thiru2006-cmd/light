import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const TransitionSection = () => {
  const { ref, scrollProgress, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Calculate transition progress (0 to 1)
  const transitionProgress = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.6));
  
  // Interpolate colors based on scroll progress
  const backgroundColor = `hsl(${222.2 * transitionProgress}, ${84 * transitionProgress}%, ${100 - (95.1 * transitionProgress)}%)`;
  const textColor = `hsl(0, 0%, ${100 - (100 * transitionProgress)}%)`;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
        transition: 'background-color 0.1s ease-out, color 0.1s ease-out',
      }}
    >
      {/* Dynamic geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-current opacity-10"
            style={{
              width: '2px',
              height: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
              top: '50%',
              transform: `translateY(-50%) rotate(${i * 15}deg) scaleY(${0.5 + transitionProgress * 0.5})`,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
              opacity: 0.1 + transitionProgress * 0.2,
            }}
          />
        ))}

        {/* Floating elements */}
        <div 
          className="absolute w-64 h-64 rounded-full border border-current opacity-20"
          style={{
            top: '20%',
            right: '10%',
            transform: `scale(${0.8 + transitionProgress * 0.4}) rotate(${transitionProgress * 180}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        
        <div 
          className="absolute w-32 h-32 rounded-full bg-current opacity-10"
          style={{
            bottom: '30%',
            left: '15%',
            transform: `scale(${1.2 - transitionProgress * 0.4}) translateY(${transitionProgress * 50}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 
            className="text-display mb-8 font-bold"
            style={{
              opacity: 0.7 + transitionProgress * 0.3,
              transform: `scale(${0.9 + transitionProgress * 0.1})`,
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
            }}
          >
            The Magic of
            <br />
            <span className="text-glow">Seamless Transition</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6 text-left"
              style={{
                transform: `translateX(${-20 + transitionProgress * 20}px)`,
                opacity: 0.8 + transitionProgress * 0.2,
                transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Advanced CSS Techniques</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Leveraging hardware-accelerated transforms, intersection observers, 
                and scroll-based animations to create fluid visual experiences.
              </p>
              <div className="w-16 h-1 bg-current opacity-60" />
            </div>

            <div 
              className="space-y-6 text-left"
              style={{
                transform: `translateX(${20 - transitionProgress * 20}px)`,
                opacity: 0.8 + transitionProgress * 0.2,
                transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">React Integration</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Custom hooks and component architecture that maintain 60fps performance 
                while delivering sophisticated visual effects.
              </p>
              <div className="w-16 h-1 bg-current opacity-60" />
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-16 flex justify-center">
            <div className="w-64 h-2 bg-current/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-current rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${transitionProgress * 100}%`,
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};