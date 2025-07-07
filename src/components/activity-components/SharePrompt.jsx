import { Share2 } from 'lucide-react';


export function SharePrompt({
  title = 'Compartilhe com a Galáxia da Laica!',
  description = 'Conte sua experiência e inspire outras famílias!',
  note = 'As histórias mais criativas podem aparecer na Galeria Galáctica!',
  whatsappMessage = 'Olha só o que criamos com a Laica!',
}) {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/message/CW7K3AWF66LJL1?text=${encodedMessage}`;

  return (
    <div className="font-pixel bg-black/50 border-4 border-pink-500 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center space-y-6">
      <h3 className="text-2xl md:text-3xl   tracking-wider">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
      {note && (
        <p className="text-sm text-white/60 tracking-widest">{note}</p>
      )}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 w-full sm:w-auto">
        <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
          <Share2 className="h-5 w-5" />
          Compartilhar
        </button>
      </a>
    </div>
  );
}
