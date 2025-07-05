import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export function IntroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    //const hasSeenIntro = true;
    if (!hasSeenIntro) {
      setShowVideo(true);
    }
  }, []);

  const handleClose = () => {
    const videoElement = document.getElementById('intro-video');
    if (videoElement) {
      videoElement.pause();
    }
    setShowVideo(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  if (!showVideo) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl shadow-purple-500/20">
        <video
          id="intro-video"
          className="w-full h-full rounded-lg"
          src="https://res.cloudinary.com/da0kfwo1r/video/upload/v1746393382/planeta_sentimento_ilha_cozinha_olhos_vendados_rzpdtd.mp4"
          autoPlay
          onEnded={handleClose}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleClose}
            className="text-white bg-black/20 hover:bg-white/10 hover:text-white"
          >
            Skip <X className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
