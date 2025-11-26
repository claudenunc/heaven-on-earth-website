export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left orb - Cyber blue */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyber/20 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '0s', animationDuration: '8s' }} />

        {/* Top right orb - Plasma purple */}
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-plasma/15 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '2s', animationDuration: '10s' }} />

        {/* Bottom left orb - Neon cyan */}
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-neon/10 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '4s', animationDuration: '12s' }} />

        {/* Bottom right orb - Cyber blue */}
        <div className="absolute bottom-1/3 -right-24 w-64 h-64 bg-cyber/15 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '6s', animationDuration: '9s' }} />
      </div>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-10" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(0, 212, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
