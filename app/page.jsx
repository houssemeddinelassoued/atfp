"use client";

import React, { useState } from "react";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Facebook,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState("fr"); // "fr" or "ar"
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSectors, setOpenSectors] = useState([]);

  const toggleLang = () => {
    setLang((prev) => (prev === "fr" ? "ar" : "fr"));
    setIsMenuOpen(false);
  };

  const isRtl = lang === "ar";

  // Fichiers attendus dans /public
  const IMAGES = {
    logo: "/logo.png",
    hero: "/cfa-entree.png",
    building: "/cfa-batiment.png",
  };

  const content = {
    fr: {
      title: "Centre de Formation et d'Apprentissage de Bizerte",
      subtitle: "Agence Tunisienne de la Formation Professionnelle",
      heroText:
        "Construisez votre avenir professionnel avec nos formations certifiées.",
      tableTitle: "Nos Spécialités",
      colSector: "Sous Secteur",
      colSpecialty: "Spécialité",
      colDuration: "Durée (Ans)",
      colDiploma: "Diplôme / Niveau",
      contactTitle: "Contactez-nous",
      apprenticeshipTitle: "Apprentissage Professionnel",
      apprenticeshipText:
        "Le centre offre également la possibilité d'un apprentissage professionnel dans toutes les spécialités disponibles. Cette opportunité est ouverte aux jeunes âgés de 15 à 20 ans ayant un niveau scolaire inférieur à la 9ème année de base, leur permettant d'acquérir des compétences pratiques directement auprès des artisans et entreprises partenaires.",
      address: "37 Avenue de la liberté, Tunis, Tunisia, 1002",
      email: "dic@takwin.atfp.tn",
      website: "atfp.tn",
      links: "Liens Utiles",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
      diplomas: {
        CAP: "CAP (Certificat d'Aptitude Professionnelle)",
        BTP: "BTP (Brevet Technicien Professionnel)",
      },
    },
    ar: {
      title: "مركز التكوين و التدريب المهني ببنزرت",
      subtitle: "الوكالة التونسية للتكوين المهني",
      heroText: "ابنِ مستقبلك المهني مع دوراتنا التدريبية المعتمدة.",
      tableTitle: "اختصاصات التكوين",
      colSector: "القطاع",
      colSpecialty: "الاختصاص",
      colDuration: "المدة (سنة)",
      colDiploma: "مستوى التأهيل / الشهادة",
      contactTitle: "اتصل بنا",
      apprenticeshipTitle: "التدريب المهني",
      apprenticeshipText:
        "يوفر المركز إمكانية التدريب المهني في جميع الاختصاصات المتوفرة بالجهة لدى الحرفيين والمؤسسات. هذا المسار متاح لمن لهم مستوى دراسي دون التاسعة أساسي وتتراوح أعمارهم بين 15 و 20 سنة، مما يتيح لهم اكتساب مهارات عملية مباشرة في سوق العمل.",
      address: "37 شارع الحرية، تونس، تونس، 1002",
      email: "dic@takwin.atfp.tn",
      website: "atfp.tn",
      links: "روابط مفيدة",
      followUs: "تابعونا",
      rights: "جميع الحقوق محفوظة.",
      diplomas: {
        CAP: "شهادة الكفاءة المهنية",
        BTP: "مؤهل التقني المهني",
      },
    },
  };

  const courses = [
    {
      sector: { fr: "Confection", ar: "الخياطة" },
      specialty: {
        fr: "Agent de fabrication en industries d'habillement",
        ar: "عون في صناعة الملابس",
      },
      duration: "1.5",
      level: "CAP",
    },
    {
      sector: { fr: "Confection", ar: "الخياطة" },
      specialty: {
        fr: "Technicien de fabrication en industrie d'habillement",
        ar: "تقني في صناعة الملابس",
      },
      duration: "2",
      level: "BTP",
    },
    {
      sector: { fr: "Confection", ar: "الخياطة" },
      specialty: {
        fr: "Technicien de méthode en industries d'habillement",
        ar: "تقني في أساليب صناعة الملابس",
      },
      duration: "2",
      level: "BTP",
    },
    {
      sector: { fr: "Mécanique d'entretien", ar: "الصيانة الآلية" },
      specialty: {
        fr: "Agent de maintenance des Systèmes mécaniques",
        ar: "عون في صيانة الأنظمة الميكانيكية",
      },
      duration: "2",
      level: "CAP",
    },
    {
      sector: { fr: "Electrotechnique", ar: "الكهرباء التقنية" },
      specialty: { fr: "Electromécanicien", ar: "كهربائي ميكانيكي" },
      duration: "1.2",
      level: "CAP",
    },
    {
      sector: { fr: "Electrotechnique", ar: "الكهرباء التقنية" },
      specialty: {
        fr: "Installateur en électricité de bâtiment",
        ar: "مركب في كهرباء البناء",
      },
      duration: "1.5",
      level: "CAP",
    },
    {
      sector: { fr: "Electrotechnique", ar: "الكهرباء التقنية" },
      specialty: {
        fr: "Tabletier câbleur en électricité",
        ar: "مركب الاسلاك الكهربائية",
      },
      duration: "1",
      level: "CAP",
    },
    {
      sector: { fr: "Electronique", ar: "الالكترونيك" },
      specialty: {
        fr: "Technicien en maintenance industrielle",
        ar: "تقني في الصيانة الصناعية",
      },
      duration: "2",
      level: "BTP",
    },
    {
      sector: { fr: "Electronique", ar: "الالكترونيك" },
      specialty: {
        fr: "Technicien en maintenance électronique des systèmes automatisés",
        ar: "تقني في الصيانة الالكترونية للأنظمة الآلية",
      },
      duration: "2",
      level: "BTP",
    },
    {
      sector: { fr: "Sanitaire, Froid et climatisation", ar: "التجهيز الصحي والتبريد وتكييف الهواء" },
      specialty: { fr: "Monteur dépanneur frigoriste", ar: "مركب مصلح في التبريد" },
      duration: "1.2",
      level: "CAP",
    },
    {
      sector: { fr: "Sanitaire, Froid et climatisation", ar: "التجهيز الصحي والتبريد وتكييف الهواء" },
      specialty: {
        fr: "Technicien en froid commercial et climatisation",
        ar: "تقني في التبريد التجاري و تكييف الهواء",
      },
      duration: "2",
      level: "BTP",
    },
    {
      sector: { fr: "Maintenance des Véhicules et des Moteurs", ar: "صيانة العربات و المحركات" },
      specialty: {
        fr: "Réparateur Automobile Essence Diesel",
        ar: "ميكانيكي سيارات بنزين و ديزل",
      },
      duration: "2",
      level: "CAP",
    },
    {
      sector: { fr: "Maintenance des Véhicules et des Moteurs", ar: "صيانة العربات و المحركات" },
      specialty: {
        fr: "Technicien en Mécanique et électricité Automobile",
        ar: "تقني في ميكانيك و كهرباء السيارات",
      },
      duration: "2.3",
      level: "BTP",
    },
  ];

  const groupedCourses = courses.reduce((acc, course) => {
    const key = course.sector.fr;
    if (!acc[key]) {
      acc[key] = { sector: course.sector, items: [] };
    }
    acc[key].items.push(course);
    return acc;
  }, {});

  const t = content[lang];

  const groupedList = Object.values(groupedCourses);

  return (
    <div
      className={`min-h-screen bg-gray-50 text-gray-800 font-sans ${
        isRtl ? "rtl" : "ltr"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center shrink-0">
                <img
                  src={IMAGES.logo}
                  alt="ATFP Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div className="hidden h-full w-full bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-400 text-center">Logo</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {t.subtitle}
                </span>
                <span className="text-sm sm:text-lg font-bold text-gray-900 leading-tight">
                  {t.title}
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href="#specialties"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                {t.tableTitle}
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                {t.contactTitle}
              </a>
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all font-medium text-sm"
              >
                <Globe size={16} />
                {lang === "fr" ? "العربية" : "Français"}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a
                href="#specialties"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                {t.tableTitle}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
              >
                {t.contactTitle}
              </a>
              <button
                onClick={toggleLang}
                className="w-full text-left rtl:text-right flex items-center gap-2 px-3 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-md mt-2"
              >
                <Globe size={18} />
                {lang === "fr" ? "Switch to Arabic" : "Passer au Français"}
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-start rtl:lg:text-right z-10">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              <span className="block text-red-600">
                {lang === "fr" ? "Formation" : "التكوين"}
              </span>
              <span className="block text-gray-900">
                {lang === "fr" ? "Professionnelle" : "المهني"}
              </span>
            </h1>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-base text-gray-600 sm:text-lg md:text-xl md:max-w-3xl">
              {t.heroText}
            </p>
            <div className="mt-8 max-w-md mx-auto lg:mx-0 sm:flex sm:justify-center lg:justify-start rtl:lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#specialties"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-all"
                >
                  {lang === "fr" ? "Découvrir les formations" : "اكتشف الدورات"}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-lg aspect-video bg-gray-100">
              <img
                src={IMAGES.hero}
                alt="CFA Bizerte Entrance"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/e2e8f0/1e293b?text=Image+Introuvable";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-semibold text-lg">
                  {lang === "fr" ? "Bienvenue au Centre" : "مرحبا بكم في المركز"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="specialties" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              {lang === "fr" ? "Formations" : "الدورات"}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t.tableTitle}
            </p>
          </div>

          <div className="space-y-4">
            {groupedList.map((group) => {
              const isOpen = openSectors.includes(group.sector.fr);
              return (
                <div
                  key={group.sector.fr}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSectors((prev) =>
                        prev.includes(group.sector.fr)
                          ? prev.filter((key) => key !== group.sector.fr)
                          : [...prev, group.sector.fr]
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {group.sector[lang]}
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        isOpen ? "rotate-90" : ""}
                      `}
                    />
                  </button>

                  {isOpen && (
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-t border-gray-200 bg-white">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800 text-white">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-start rtl:text-right"
                                >
                                  {t.colSpecialty}
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center w-1/6"
                                >
                                  {t.colDuration}
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-start rtl:text-right w-1/4"
                                >
                                  {t.colDiploma}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {group.items.map((course, index) => (
                                <tr
                                  key={`${group.sector.fr}-${index}`}
                                  className="hover:bg-gray-50 transition-colors"
                                >
                                  <td className="px-6 py-4 text-sm text-gray-600">
                                    {course.specialty[lang]}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-semibold">
                                    {course.duration}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span
                                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        course.level === "BTP"
                                          ? "bg-blue-100 text-blue-800"
                                          : "bg-green-100 text-green-800"
                                      }`}
                                    >
                                      {t.diplomas[course.level]}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-10 lg:mb-0 order-first lg:order-last">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform translate-x-3 translate-y-3"></div>
              <img
                src={IMAGES.building}
                alt="CFA Building"
                className="relative rounded-2xl shadow-lg w-full h-64 sm:h-80 object-cover bg-gray-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/blue/white?text=Batiment+CFA";
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                  {lang === "fr" ? "Opportunité" : "فرصة"}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {t.apprenticeshipTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.apprenticeshipText}
              </p>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                  {lang === "fr" ? "Âge: 15 - 20 ans" : "السن: 15 - 20 سنة"}
                </div>
                <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                  {lang === "fr" ? "Niveau < 9ème" : "المستوى < 9 أساسي"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                {t.contactTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3 rtl:mr-3 rtl:ml-0 text-base text-gray-600">
                    <p>{t.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3 rtl:mr-3 rtl:ml-0 text-base text-gray-600">
                    <p dir="ltr" className="rtl:text-right">
                      72 436 133 / 72 433 064
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3 rtl:mr-3 rtl:ml-0 text-base text-gray-600">
                    <p>{t.email}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {t.followUs}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.facebook.com/atfp.tn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook size={20} />
                      <span>ATFP Official</span>
                    </a>
                    <a
                      href="http://atfp.tn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Globe size={20} />
                      <span>{t.website}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Map"
                src="https://www.google.com/maps?q=36.8065,10.1956&z=13&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-start rtl:text-right">
            <p className="text-sm text-gray-400">
              © 2024 CFA Bizerte. {t.rights}
            </p>
            <p className="text-xs text-gray-600 mt-1">Développé par Jawher Cheikh - 2026 | Projet Personnel</p>
          </div>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a href="https://www.facebook.com/atfp.tn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="mailto:dic@takwin.atfp.tn" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
