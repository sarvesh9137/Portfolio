import { useTheme } from './ThemeContext';

export const Background3D = () => {
    const { theme } = useTheme();

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base gradient */}
            <div className={`absolute inset-0 bg-gradient-animated ${theme === 'light' ? 'opacity-20' : 'opacity-100'}`} />

            {/* J.A.R.V.I.S Central Hub - Top Right */}
            <div className="jarvis-hub hub-top-right">
                <div className="jarvis-ring ring-outer" />
                <div className="jarvis-ring ring-middle" />
                <div className="jarvis-ring ring-inner" />
                <div className="jarvis-core" />
            </div>

            {/* J.A.R.V.I.S Hub - Center Left */}
            <div className="jarvis-hub hub-center-left">
                <div className="jarvis-ring ring-outer" />
                <div className="jarvis-ring ring-middle" />
                <div className="jarvis-ring ring-inner" />
                <div className="jarvis-core" />
            </div>

            {/* J.A.R.V.I.S Hub - Bottom Right */}
            <div className="jarvis-hub hub-bottom-right">
                <div className="jarvis-ring ring-outer" />
                <div className="jarvis-ring ring-middle" />
                <div className="jarvis-ring ring-inner" />
                <div className="jarvis-core" />
            </div>

            {/* Secondary rotating rings */}
            <div className="jarvis-ring-secondary secondary-1" />
            <div className="jarvis-ring-secondary secondary-2" />
            <div className="jarvis-ring-secondary secondary-3" />
            <div className="jarvis-ring-secondary secondary-4" />

            {/* Hexagonal Grid Pattern */}
            <div className="hexagon-grid">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`hex-${i}`}
                        className="hexagon"
                        style={{
                            left: `${10 + (i % 5) * 20}%`,
                            top: `${15 + Math.floor(i / 5) * 22}%`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Scan Lines */}
            <div className="scan-line scan-horizontal" />
            <div className="scan-line scan-vertical" />

            {/* Tech Corner Elements */}
            <div className="tech-corner corner-tl" />
            <div className="tech-corner corner-tr" />
            <div className="tech-corner corner-bl" />
            <div className="tech-corner corner-br" />

            {/* Pulsing Circles */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={`pulse-${i}`}
                    className="pulse-circle"
                    style={{
                        left: `${15 + (i % 4) * 25}%`,
                        top: `${25 + Math.floor(i / 4) * 50}%`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            {/* Floating Tech Lines */}
            <div className="tech-line line-1" />
            <div className="tech-line line-2" />
            <div className="tech-line line-3" />

            {/* Particle System */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`,
                    }}
                />
            ))}

            {/* Gradient Orbs */}
            <div className="gradient-orb orb-1" />
            <div className="gradient-orb orb-2" />
        </div>
    );
};
