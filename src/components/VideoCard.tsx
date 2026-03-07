interface VideoCardProps {
  label: string;
  caption: string;
  videoId?: string;
  type?: "youtube" | "loom";
}

const VideoCard = ({ label, caption, videoId, type = "youtube" }: VideoCardProps) => {
  const embedUrl = type === "youtube"
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.loom.com/embed/${videoId}`;

  return (
    <div className="flex flex-col gap-3">
      <span className="overline text-foreground/[0.35]">{label}</span>
      <div className="card-surface overflow-hidden">
        <div className="relative w-full aspect-video bg-background">
          {videoId ? (
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={label}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ border: '2px solid hsla(60, 14%, 95.3%, 0.35)' }}>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="ml-1">
                  <path d="M0 0L16 10L0 20V0Z" fill="hsla(60, 14%, 95.3%, 0.5)" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="body-small text-foreground/[0.35]">{caption}</p>
    </div>
  );
};

export default VideoCard;
