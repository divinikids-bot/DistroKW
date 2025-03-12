import Image from 'next/image';

type TeamCardProps = {
  name: string;
  email: string;
  phone: string;
  picture: string;
};

export default function TeamCard({ name, email, phone, picture }: TeamCardProps) {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
      <Image
        src={picture}
        alt={name}
        width={96}   // 24 * 4 (karena tailwind "w-24 h-24" -> 6rem -> 96px)
        height={96}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm">{email}</p>
      <p className="text-sm">{phone}</p>
    </div>
  );
}
