import Image from 'next/image';
/** A genuine Vitals app capture in the shared product frame. */
export function ProductScreen({
  src,
  alt,
  title,
  ratio = '16 / 10',
  priority = false,
}: {
  src: string;
  alt: string;
  title: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <figure className="product-screen">
      <div className="product-screen-chrome" aria-hidden="true"><span /><span /><span /><span className="product-screen-title">Vitals | {title}</span></div>
      <div className="product-screen-image" style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill priority={priority} loading={priority ? undefined : 'lazy'} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 80vw, 56vw" style={{ objectFit: 'contain', objectPosition: 'top', background: 'var(--surface)' }} />
      </div>
      <figcaption>{title} in Vitals</figcaption>
    </figure>
  );
}
