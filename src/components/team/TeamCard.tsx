export default function TeamCard({ name, email, phone, picture }: any) {
    return (
      <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
        <img src={picture} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{phone}</p>
      </div>
    );
  }
  