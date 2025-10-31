export default function BackgroundAnimation() {
  return (
    <div aria-hidden="true" className="bg-anim-overlay hero-anim pointer-events-none absolute inset-0">
      {/* small twinkling particles only (large ash blobs removed) */}
      <div className="particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`p p${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
