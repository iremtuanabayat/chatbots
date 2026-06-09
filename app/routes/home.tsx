import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { BrandMark } from "~/components/brand-mark";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Gamepad2,
  Languages,
  MessageSquareText,
  Monitor,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function meta() {
  return [
    { title: "ArisAI - Akıllı Yapay Zeka Asistanınız" },
    {
      name: "description",
      content:
        "ArisAI ile hızlı, güvenli ve anlaşılır yapay zeka deneyimi. Sohbet edin, fikir üretin ve işlerinizi kolaylaştırın.",
    },
  ];
}

const features = [
  {
    icon: BrainCircuit,
    title: "Akıllı Yanıtlar",
    text: "Sorularınızı bağlama göre anlayan, düzenli ve uygulanabilir cevaplar alın.",
  },
  {
    icon: MessageSquareText,
    title: "Kolay Sohbet",
    text: "Temiz arayüz, net geçmiş ve farklı ihtiyaçlara göre hazırlanmış asistanlar.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Kullanım",
    text: "Hesap ve sohbet akışları sade, kontrollü ve kullanıcı odaklı tasarlandı.",
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#2f2c38]/90 px-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3 text-white">
            <BrandMark size="sm" />
            <span className="text-xl font-extrabold tracking-tight">ArisAI</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-white/65 md:flex">
            <a href="#features" className="transition hover:text-white">
              Özellikler
            </a>
            <a href="#experience" className="transition hover:text-white">
              Deneyim
            </a>
            <Link to="/chat" className="transition hover:text-white">
              Uygulama
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Temayı değiştir"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button
              asChild
              className="h-11 rounded-xl bg-white/10 px-4 font-bold text-white hover:bg-white/15"
            >
              <Link to="/login">Giriş Yap</Link>
            </Button>
            <Button
              asChild
              className="hidden h-11 rounded-xl bg-gradient-to-r from-[#8d36ff] via-[#d84fd2] to-[#21c6cc] px-5 font-extrabold text-white shadow-lg shadow-fuchsia-500/25 hover:brightness-110 sm:inline-flex"
            >
              <Link to="/register">Hemen Başla</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[92vh] px-4 pb-12 pt-28 sm:pt-32">
        <div className="absolute inset-0 aris-hero-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(33,198,204,0.20),transparent_30%),linear-gradient(180deg,rgba(8,10,22,0.08),var(--background)_92%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#21c6cc]/30 bg-[#21c6cc]/12 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#21c6cc] shadow-lg shadow-cyan-500/10">
              <Sparkles className="h-4 w-4" />
              Yeni nesil yapay zeka deneyimi
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground sm:text-6xl lg:mx-0 lg:text-7xl">
              Gerçekliğin ötesinde,
              <span className="block bg-gradient-to-r from-[#21c6cc] via-[#8d36ff] to-[#d84fd2] bg-clip-text text-transparent">
                anlaşılır bir AI dünyası.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl lg:mx-0">
              ArisAI, sohbeti sadeleştirir: sorun, üretin, karşılaştırın ve karar verin.
              Koyu metaverse estetiğiyle güçlü; temiz akışlarıyla kullanımı kolay.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                asChild
                className="h-14 w-full rounded-xl bg-gradient-to-r from-[#ff8b37] via-[#d84fd2] to-[#7bb7ff] px-7 text-base font-extrabold text-white shadow-xl shadow-fuchsia-500/20 hover:brightness-110 sm:w-auto"
              >
                <Link to="/register">
                  Şimdi Başlat
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 w-full rounded-xl border-[#21c6cc]/40 bg-background/70 px-7 text-base font-bold backdrop-blur hover:bg-[#21c6cc]/10 sm:w-auto"
              >
                <a href="#features">Özellikleri Keşfet</a>
              </Button>
            </div>
          </div>

          <div id="experience" className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#21c6cc]/25 via-[#8d36ff]/25 to-[#d84fd2]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#171727]/90 p-5 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <BrandMark size="sm" />
                  <div>
                    <p className="text-sm font-bold">ArisAI Kontrol</p>
                    <p className="text-xs text-white/55">Canlı asistan oturumu</p>
                  </div>
                </div>
                <BadgeCheck className="h-5 w-5 text-[#21c6cc]" />
              </div>

              <div className="grid gap-3">
                <div className="ml-auto max-w-[86%] rounded-2xl bg-gradient-to-r from-[#8d36ff] to-[#d84fd2] px-4 py-3 text-sm font-semibold text-white">
                  Yeni kampanya metnini daha anlaşılır hale getir.
                </div>
                <div className="max-w-[92%] rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-sm leading-6 text-white/82">
                  Elbette. Mesajı üç net bölüme ayırdım: değer önerisi, güven hissi ve hızlı başlangıç. İstersen bunu daha kurumsal veya daha enerjik tona da çevirebilirim.
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-white">
                {[
                  [Gamepad2, "Metaverse"],
                  [Languages, "Türkçe"],
                  [Monitor, "Web"],
                ].map(([Icon, label]) => (
                  <div key={label as string} className="rounded-2xl border border-white/10 bg-white/7 p-4 text-center">
                    <Icon className="mx-auto mb-2 h-5 w-5 text-[#21c6cc]" />
                    <p className="text-xs font-bold">{label as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#8d36ff]">
              Kullanıcı dostu akış
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Güçlü görünen, kolay kullanılan bir asistan platformu.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-border bg-card/85 p-7 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-[#21c6cc]/50 hover:shadow-cyan-500/10"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#21c6cc]/20 to-[#8d36ff]/20 text-[#21c6cc] ring-1 ring-[#21c6cc]/25 transition group-hover:scale-105">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-black">{feature.title}</h3>
                <p className="leading-7 text-muted-foreground">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#2f2c38] p-8 text-white shadow-2xl shadow-black/20 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                ArisAI ile hemen sohbete başlayın.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Hesabınızı oluşturun, uygun asistanı seçin ve fikirlerinizi daha hızlı ilerletin.
              </p>
            </div>
            <Button
              size="lg"
              asChild
              className="h-14 rounded-xl bg-gradient-to-r from-[#21c6cc] via-[#8d36ff] to-[#d84fd2] px-7 text-base font-extrabold text-white hover:brightness-110"
            >
              <Link to="/register">
                Ücretsiz Hesap Oluştur
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <BrandMark size="sm" />
            <span className="text-lg font-black">ArisAI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 ArisAI. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
