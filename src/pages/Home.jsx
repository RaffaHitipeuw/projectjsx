import AlertButton from "./AlertButton";

export default function Home() {
  return (
    <section className="text-center mt-56">
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        halo semua!
      </p>

      <AlertButton
        text="klik disini"
        message="kosong *pencet lagi deh mendingan"
      />
    </section>
  );
}
