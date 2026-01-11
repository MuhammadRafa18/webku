"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
{
  name: "Bronze",
  price: "Rp 500.000 – Rp 1.200.000",
  subtitle: "Website Simple untuk Mulai Online",
  description:
    "Paket paling efisien untuk bisnis yang ingin tampil profesional secara online tanpa fitur rumit. Fokus pada kehadiran, kejelasan informasi, dan kepercayaan dasar.",
  suitableFor:
    "UMKM, usaha baru, personal brand, jasa lokal yang butuh website cepat dan terjangkau.",
  features: [
    "Landing page",
    "Desain rapi & mobile friendly",
    "Informasi bisnis, layanan, dan kontak",
    "Integrasi WhatsApp / tombol kontak",
    "Domain & hosting (opsional, sesuai kebutuhan) ",
    "Gratis konsultasi",

  ],
},
{
  name: "Silver",
  price: "Rp 1.200.000 – Rp 3.400.000",
  subtitle: "Website Profesional untuk Operasional Bisnis ",
  popular: true,
  description:
    "Website yang dirancang lebih matang untuk bisnis yang sudah berjalan dan ingin terlihat lebih serius, rapi, serta mudah dikelola.",
  suitableFor:
    "Bisnis yang sudah berjalan, company profile, jasa profesional, UMKM berkembang.",
  features: [
    "Website multi halaman (profil, layanan, portofolio, kontak, dll)",
    "Dashboard admin untuk update konten",
    "Form terhubung WhatsApp / Email",
    "Struktur konten rapi & SEO friendly",
    "Desain custom sesuai identitas brand",
    "Performa & keamanan ",
    "Gratis konsultasi",
  ],
},
{
  name: "Gold",
  price: "Custom (Konsultasi)",
  subtitle: "Sistem Web & Otomasi Bisnis",
  description:
    "Solusi sistem web yang disesuaikan penuh dengan kebutuhan bisnis. Cocok untuk proses yang kompleks, data dinamis, dan integrasi lanjutan.",
  suitableFor:
    "Perusahaan, startup, bisnis dengan alur operasional kompleks atau kebutuhan khusus.",
  features: [
    "Fitur & sistem disesuaikan kebutuhan bisnis",
    "Dashboard kompleks & role user",
    "Manajemen data",
    "Visualisasi data (chart & laporan)",
    "Integrasi pembayaran, API, atau sistem pihak ketiga",
    "Diskusi & perancangan sistem sebelum development",
  ],
},

];

export default function PricingSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
            Harga Layanan
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Pilih Paket Sesuai
            <br />
            Kebutuhan Bisnis Anda
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Harga fleksibel dan dapat disesuaikan dengan kompleksitas serta
            kebutuhan website Anda .
          </p>
        </motion.div>

        {/* PRICING */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`
                relative rounded-3xl p-8
                backdrop-blur-xl ring-1 ring-black/5
                transition-shadow
                ${
                  plan.popular
                    ? "bg-white shadow-xl"
                    : "bg-white/70 hover:shadow-lg"
                }
              `}
            >
              {/* POPULAR */}
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 text-xs font-semibold text-white">
                  Paling Populer
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-indigo-600">
                {plan.subtitle}
              </p>

              <p className="mt-6 text-2xl text-center font-bold text-gray-900">
                {plan.price}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open("https://wa.me/6287715371583", "_blank")
                }
                className="
                  mt-10 w-full rounded-xl
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  py-3 text-sm font-semibold text-white
                  transition hover:opacity-90
                "
              >
                Konsultasi Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
