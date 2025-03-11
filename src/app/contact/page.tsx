import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <Contact/>
        </div>
      </div>
    </div>
  );
}
