import Image from 'next/image';

export default function Daniel() {
  return (
    <div className="flex items-center gap-10 p-6 bg-zinc-800 w-fit rounded">
      <Image
        alt="Snyggast bilden på Daniel"
        width={124}
        height={124}
        src="/images/danne.jpg"
        className="rounded-full"
      />
      <div className="w-44">
        <h1 className="text-white text-2xl">Daniel</h1>
        <p className="text-white">
          Daniel är en episk människa som har börjat lära sig React.js + Next.js
        </p>
      </div>
    </div>
  );
}
