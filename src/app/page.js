import Image from "next/image";

const gallery = [
  "/pexels-artem-saranin-1547813.jpg",
  "/pexels-eberhard-grossgasteiger-592284.jpg",
  "/pexels-jacob-colvin-1761279.jpg",
  "/pexels-luis-dalvan-1770809.jpg",
  "/pexels-luis-del-río-15286.jpg",
  "/pexels-michael-block-3225517.jpg",
];

export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen items-center content-center justify-center gap-4 p-4">
      {gallery.map((src) => (
        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm shadow-slate-500/20"
          key={src}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}
    </main>
  );
}
