"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./ServicesAccordion.module.scss"

interface Service {
  id: string;
  title?: string;
  description?: string;
  price?: string;
  duration?: string;
  ownPage?: boolean | undefined;
}

interface ServicesAccordionProps {
  services: Service[];
}

// Функция для категоризации услуг
const categorizeServices = (services: Service[]) => {
  const therapyServices: Service[] = [];
  const hygieneServices: Service[] = [];
  const ortopediaServices: Service[] = [];
  const surgeryServices: Service[] = [];
  const kidsServices: Service[] = [];
  const implantServices: Service[] = [];
  const ortodontServices: Service[] = [];

  const therapyIds = [
    "pervichnyy-priem",
    "dispansernyy-priem",
    "povtornyy-priem",
    "optragate",
    "kofferdam",
    "vremennaya-plomba",
    "vremennaya-plomba-sits",
    "vremennaya-plomba-devit",
    "plomba-1-5-6",
    "plomba-2-3",
    "plomba-4",
    "polirovka-garantiya",
    "pulpotomiya",
    "ekstirpatsiya-pulpy",
    "vosstanovlenie-stenki",
    "snyatie-plomby",
    "lechebnaya-prokladka",
    "plomba-sits",
    "otsrochennoe-lechenie",
    "korrektsiya-plomby",
    "bokovoy-zub-menshe",
    "peredniy-zub-menshe",
    "plombirovanie-kanala",
    "plombirovanie-lateral",
    "zakrytie-perforatsii",
    "diagnosticheskoe-preparirovanie",
    "obrabotka-kanala",
    "obrabotka-horoshiy",
    "obrabotka-plohoy",
    "vremennoe-plombirovanie",
    "medikamentoznaya-obrabotka",
    "udalenie-shtifta",
    "rasplombirovka-pasta",
    "rasplombirovka-fosfat",
    "rasplombirovka-rezorsin",
    "rasplombirovka-termafil",
    "rasplombirovka-guttapercha",
    "soshlifovyvanie",
    "ultrazvukovoe-rasshirenie",
    "izbiratelnoe-polirovanie",
    "esteticheskaya-restavratsiya",
    "bokovoy-shtift-menshe",
    "peredniy-shtift-menshe",
    "peredniy-shtift-bolshe",
    "bokovoy-shtift-bolshe",
    "dopolnitelnyy-shtift",
    "shtiftovyy-zub",
    "anesteziya-provodnikovaya",
    "anesteziya-applikatsionnaya",
    "anesteziya-infiltratsionnaya",
    "anesteziya-sochetannaya",
    "povyazka"
  ];

  const hygieneIds = [
  "lechenie-zubov",
  "professionalnaya-gigiena",
  "otbelivanie-zubov",
  "gigiena-optragate",
  "gigiena-kofferdam",
  "kompleksnaya-gigiena",
  "kompleksnaya-gigiena-molochnyy",
  "kompleksnaya-gigiena-smennyy",
  "kompleksnaya-gigiena-ortodont",
  "kompleksnaya-gigiena-ortodont-deti",
  "udalenie-myagkogo-naleta-zub",
  "udalenie-myagkogo-naleta-chelyust",
  "udalenie-myagkogo-naleta-polost",
  "razmyagchenie-tverdyh-otlozheniy",
  "udalenie-pigmentirovannogo-naleta",
  "profilakticheskaya-chistka-molochnyy",
  "profilakticheskaya-chistka-smennyy",
  "profilakticheskaya-chistka-zub",
  "ultrazvukovoe-udalenie-zub",
  "ultrazvukovoe-udalenie-molochnyy",
  "ultrazvukovoe-udalenie-smennyy",
  "ultrazvukovoe-udalenie-polost",
  "glubokoe-ftorirovanie",
  "glubokoe-ftorirovanie-molochnyy",
  "ftorirovanie-apf",
  "ustranenie-giperchuvstvitelnosti",
  "remineraliziruyushchiy-gel",
  "otbelivanie-amazing-white",
  "otbelivanie-philips-zoom",
  "individualnaya-kapa",
  "obuchenie-gigiene",
  "gigiena-anesteziya-provodnikovaya",
  "gigiena-anesteziya-applikatsionnaya",
  "gigiena-anesteziya-infiltratsionnaya",
  "gigiena-anesteziya-sochetannaya",
  "gigiena-povyazka"
  ];

  const ortopediaIDS = [
    "protezirovanie-zubov-na-implantah",
    "protezirovanie-zubov",
    "ortopediya-pervichnyy-osmotr",
    "ortopediya-pervichnyy-kpl",
    "ortopediya-povtornyy-primerka",
    "ortopediya-povtornyy-sdacha",
    "ottisk-alginat",
    "ottisk-c-silikon",
    "ottisk-a-silikon",
    "ottisk-diagnosticheskie",
    "issledovanie-modeley",
    "intraoralnoe-skanirovanie",
    "diagnosticheskoe-modelirovanie",
    "analiz-okklyuzii",
    "licevaya-duga",
    "hirurgicheskiy-shablon",
    "vinir-keramicheskiy",
    "koronka-plastmassovaya",
    "koronka-celnolitoy",
    "individualizatsiya-koronok",
    "oblicovka-plastmassoy",
    "keramicheskoe-oformlenie",
    "koronka-celnolitoy-napylenie",
    "metallokeramicheskaya-koronka",
    "metallokeramika-implant",
    "emax-koronka",
    "emax-vinir",
    "emax-vkladka",
    "vinir-emax-refraktor",
    "koronka-zirkoniy-emax",
    "shtiftovaya-vkladka-zirkoniy",
    "koronka-oksid-zirkoniya",
    "multiunit",
    "protez-2-implant",
    "protez-4-implant-balka",
    "protez-6-implant",
    "protez-6-implant-balka",
    "litaya-koronka-implant",
    "emax-implant",
    "emax-implant-straumann",
    "emax-implant-alphabio",
    "abutment-vremennyy",
    "abutment-standartnyy",
    "abutment-individualnyy",
    "individualizatsiya-abutment",
    "polnyy-semnyy-protez",
    "individualnaya-lozhka",
    "registratsiya-prikusa",
    "voskoy-shablon",
    "udalenie-shtifta-ortopediya",
    "shtiftovo-kultevaya-odnokornevoy",
    "shtiftovo-kultevaya-mnogokornevoy",
    "shtiftovo-kultevaya-zirkoniy",
    "chastichnyy-semnyy-protez",
    "nylonovyy-protez",
    "privarka-zuba",
    "pochinka-metallokeramiki",
    "izgotovlenie-attachmenta",
    "frezerovannyy-element",
    "sharovoy-attachment",
    "dopolnitelnyy-otrostok",
    "zamenamatrizy",
    "gigiena-semnyy-protez",
    "kosmeticheskaya-plastinka",
    "korrektsiya-posle-garantii",
    "litoy-bazis",
    "armirovanie-proteza",
    "izolyatsiya-torusa",
    "perebazirovka-proteza",
    "klammer-gnutyy",
    "klammer-gnutyy-napylenie",
    "klammer-opornouderzhivayushchiy",
    "klammer-opornouderzhivayushchiy-napylenie",
    "byugel-slozhnyy",
    "ogneupornaya-model",
    "fiksatsiya-koronki-vremennaya",
    "fiksatsiya-sits",
    "fiksatsiya-adgezivnaya",
    "povtornaya-fiksatsiya-implant",
    "snyatie-shtampovannoy-koronki",
    "snyatie-litoy-koronki",
    "snyatie-zirkoniy-koronki",
    "polnyy-semnyy-protez-master",
    "chastichnyy-semnyy-protez-master",
    "garnitur-keramicheskih-zubov"
  ];

  const SurgeryIds = [
    "ambulatornye-hirurgicheskie-operacii",
    "udalenie-zubov",
    "hirurgiya-pervichnyy-osmotr",
    "hirurgiya-pervichnyy-kpl",
    "hirurgiya-povtornyy-priem",
    "hirurgiya-optragate",
    "udalenie-molochnogo-zuba",
    "udalenie-odnokornevogo",
    "udalenie-mnogokornevogo",
    "udalenie-atravmaticheskoe",
    "udalenie-slozhnoe",
    "udalenie-stenki-zuba",
    "udalenie-ekzostoza",
    "udalenie-retinirovannogo",
    "cistektomiya",
    "rezektsiya-verhushki",
    "gimisektsiya",
    "lechenie-perikoronita",
    "vskrytie-odontogennogo-abscessa",
    "kuretaž-lunki",
    "vskrytie-abscessa-polosti-rta",
    "gingivotomiya",
    "gingivektomiya",
    "plastika-uzdechki-verhney-guby",
    "plastika-uzdechki-nizhney-guby",
    "plastika-uzdechki-yazyka",
    "vestibuloplastika",
    "zakrytie-recessii-odin-zub",
    "zakrytie-recessii-neskolko-zubov",
    "vzyatie-transplantata",
    "plastika-perforatsii-pazuhi",
    "nalozhenie-shva",
    "ostanovka-krovotecheniya-alvozhel",
    "ostanovka-krovotecheniya-tamponada",
    "ostanovka-krovotecheniya-gemostatic",
    "snyatie-shvov"
  ];

  const KidsIds = [
    "detskaya-stomatologiya",
     "detskaya-pervichnyy-kpl",
    "detskaya-pervichnyy-osmotr",
    "detskaya-dispansernyy-priem",
    "detskaya-povtornyy-priem",
    "detskaya-adaptatsionnyy-priem",
    "detskaya-optragate",
    "detskaya-kofferdam",
    "detskaya-tsvetnaya-plomba",
    "detskaya-plomba",
    "detskaya-plomba-posle-endodontii",
    "detskaya-lechebnaya-prokladka",
    "detskaya-vremennaya-plomba-devit",
    "detskaya-snyatie-plomby",
    "detskaya-lechenie-pulpita-pulpotek",
    "detskaya-vremennaya-plomba",
    "detskaya-polirovka-plomby",
    "detskaya-vremennoe-plombirovanie-kalasept",
    "detskaya-plombirovanie-kanala",
    "detskaya-plombirovanie-forfenan-pasta",
    "detskaya-plombirovanie-forfenan-zhidkost",
    "detskaya-pulpotomiya",
    "detskaya-ekstirpatsiya-pulpy",
    "detskaya-obrabotka-kanala",
    "detskaya-vremennoe-plombirovanie",
    "detskaya-remineraliziruyushchiy-gel",
    "detskaya-glubokoe-ftorirovanie",
    "detskaya-gigiena-molochnyy",
    "detskaya-gigiena-smennyy",
    "detskaya-ultrazvuk-molochnyy",
    "detskaya-ultrazvuk-smennyy",
    "detskaya-polirovka-garantiya",
    "detskaya-germetizatsiya-molochnyy",
    "detskaya-germetizatsiya-postoyannyy",
    "detskaya-germetizatsiya-invazivnaya",
    "detskaya-applikatsiya-lekarstva",
    "detskaya-lechebnaya-povyazka",
    "detskaya-anesteziya-provodnikovaya",
    "detskaya-anesteziya-applikatsionnaya",
    "detskaya-anesteziya-infiltratsionnaya",
    "detskaya-anesteziya-sochetannaya",
    "detskaya-povyazka"
  ];

  const ImplantIds = [
    "implantatsiya-zubov",
    "implantatsiya-alphabio",
    "implantatsiya-straumann",
    "otkrytie-implantata-alphabio",
    "otkrytie-implantata-straumann",
    "udalenie-implantata-prostoe",
    "udalenie-implantata-slozhnoe",
    "medikamentoznaya-obrabotka-desny",
    "lo-skutnaya-operatsiya",
    "kostnaya-plastika-rasshcheplenie",
    "plastika-alveolyarnogo-otrostka",
    "korrektsiya-alveolyarnogo-otrostka",
    "osteoplastika-kollapan",
    "sinus-lifting-otkrytyy-bazovyy",
    "sinus-lifting-otkrytyy-15-20-1gr",
    "sinus-lifting-otkrytyy-15-20-2gr",
    "sinus-lifting-otkrytyy-20-30-1gr",
    "sinus-lifting-otkrytyy-20-30-2gr",
    "sinus-lifting-otkrytyy-30-40-1gr",
    "sinus-lifting-otkrytyy-30-40-2gr",
    "sinus-lifting-zakrytyy-1-2mm",
    "sinus-lifting-zakrytyy-2-3mm",
    "sinus-lifting-zakrytyy-3-4mm",
    "implantatsiya-anesteziya-provodnikovaya",
    "implantatsiya-anesteziya-applikatsionnaya",
    "implantatsiya-anesteziya-infiltratsionnaya",
    "implantatsiya-anesteziya-sochetannaya",
    "implantatsiya-povyazka"
  ]

  const OrtodontIds = [
      "ispravlenie-prikusa",
    "ortodontiya-pervichnyy-kpl",
    "ortodontiya-dispansernyy-priem",
    "ortodontiya-osmotr",
    "ortodontiya-povtornyy-priem",
    "ortodontiya-optragate",
    "ortodontiya-naznachenie-rezhima-vosk",
    "ortodontiya-naznachenie-rezhima-gigiena-malyy",
    "ortodontiya-naznachenie-rezhima-gigiena-bolshoy",
    "ortodontiya-issledovanie-modeley",
    "ortodontiya-ottisk-alginat",
    "ortodontiya-izgotovlenie-modeli",
    "ortodontiya-funktsionalnye-zhevatelnye-proby",
    "ortodontiya-aktivatsiya-nesemnogo-apparata-odna-chelyust",
    "ortodontiya-aktivatsiya-nesemnogo-apparata-dve-chelyusti",
    "ortodontiya-smena-ligatury",
    "ortodontiya-ligatura-kaboyashi",
    "ortodontiya-pripasovka-dugi",
    "ortodontiya-fiksatsiya-provolochnogo-reteynera",
    "ortodontiya-snyatie-breketa",
    "ortodontiya-fiksatsiya-ortodonticheskogo-koltsa",
    "ortodontiya-zamena-dugi-niti",
    "ortodontiya-zamena-dugi-cuniti",
    "ortodontiya-zamena-dugi-tma",
    "ortodontiya-ustanovka-dugi-niti-cuniti",
    "ortodontiya-ustanovka-pruzhiny-rasshiryayushchey",
    "ortodontiya-ustanovka-pruzhiny-styagivayushchey",
    "ortodontiya-ustanovka-kryuchka-dlya-distalizatsii",
    "ortodontiya-ustanovka-tyagi-mezhchelyustnoy",
    "ortodontiya-ustanovka-dopolnitelnoy-pruzhiny",
    "ortodontiya-izgotovlenie-semnego-apparata-s-vinkom",
    "ortodontiya-aktivatsiya-semnego-apparata",
    "ortodontiya-izgotovlenie-semnego-apparata-bez-vinka",
    "ortodontiya-izgotovlenie-semnego-apparata-funktsionalnogo",
    "ortodontiya-izgotovlenie-retennoy-plastiny",
    "ortodontiya-izgotovlenie-apparata-frenkelya",
    "ortodontiya-ustanovka-kappovogo-apparata",
    "ortodontiya-korrektsiya-semnego-apparata",
    "ortodontiya-brekety-damon-q",
    "ortodontiya-dopolnitelnyy-breketa-damon-q",
    "ortodontiya-brekety-damon-clear",
    "ortodontiya-dopolnitelnyy-breketa-damon-clear",
    "ortodontiya-brekety-inspire-ice",
    "ortodontiya-dopolnitelnyy-breketa-inspire-ice",
    "ortodontiya-brekety-elite-mini-twin",
    "ortodontiya-dopolnitelnyy-breketa-elite-mini-twin",
    "ortodontiya-snyatie-breketov-s-reteynerom",
    "ortodontiya-fiksatsiya-breketa-kompozit",
    "ortodontiya-povtornaya-fiksatsiya-breketa",
    "ortodontiya-fiksatsiya-nakusochnogo-breketa",
    "ortodontiya-ustanovka-shchechnoy-trubki",
    "ortodontiya-polirovanie-konstruktsii"
  ]

  services.forEach(service => {
    if (therapyIds.includes(service.id)) {
      therapyServices.push(service);
    } else if (hygieneIds.includes(service.id)) {
      hygieneServices.push(service);
    } else if (ortopediaIDS.includes(service.id)) {
      ortopediaServices.push(service);
    } else if (SurgeryIds.includes(service.id)) {
      surgeryServices.push(service);
    } else if (KidsIds.includes(service.id)) {
      kidsServices.push(service);
    } else if (ImplantIds.includes(service.id)) {
      implantServices.push(service);
    } else if (OrtodontIds.includes(service.id)) {
      ortodontServices.push(service);
    }
  });

  return { therapyServices, hygieneServices, ortopediaServices, surgeryServices, kidsServices, implantServices, ortodontServices};
};

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  const { therapyServices, hygieneServices, ortopediaServices, surgeryServices, kidsServices, implantServices, ortodontServices } = categorizeServices(services);

  const renderServiceAccordion = (service: Service, idx: number) => {
    const panelId = `service-panel-${idx + 1}`;
    const headerId = `service-header-${idx + 1}`;
    
    return (
      <Accordion
        key={service.id}
        className={styles.lightAccordion}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls={panelId}
          id={headerId}
        >
          <div className={styles.accordionHeader}>
            <Typography component="h3" className={styles.accordionTitle}>
              {service.title}
            </Typography>
            <div className={styles.accordionControls}>
              {service.price && (
                <span className={styles.servicePrice}>{service.price}</span>
              )}
            </div>
          </div>
        </AccordionSummary>
        
        <AccordionDetails id={panelId} aria-labelledby={headerId}>
          <div className={styles.serviceDetails}>
            <Typography className={styles.accordionContent}>
              {service.description}
            </Typography>
            
            <div className={styles.serviceMeta}>
              {service.duration && (
                <div className={styles.metaItem}>
                  <strong>Длительность:</strong>
                  <span>{service.duration}</span>
                </div>
              )}
              {service.price && (
                <div className={styles.metaItem}>
                  <strong>Стоимость:</strong>
                  <span>{service.price}</span>
                </div>
              )}
            </div>
            {service.ownPage &&
            <Link 
              href={`/services/${service.id}`} 
              className={styles.detailsLink}
            >
              Подробнее об услуге
            </Link>
            }
          </div>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <section className={styles.faqContainer} aria-labelledby="services-title">
      {/* Аккордеон Терапия */}
      {(therapyServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="therapy-panel"
          id="therapy-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Терапия
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="therapy-panel" aria-labelledby="therapy-header">
          <div className={styles.lightAccordion__inner}>
            {therapyServices.map((service, idx) => renderServiceAccordion(service, idx))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Аккордеон Гигиена */}
      {(hygieneServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Гигиена
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {hygieneServices.map((service, idx) => renderServiceAccordion(service, idx + therapyServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Аккордеон Ортопедия */}
      {(ortopediaServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Ортопедия
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {ortopediaServices.map((service, idx) => renderServiceAccordion(service, idx + hygieneServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Аккордеон Хирургия */}
      {(surgeryServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Хирургия
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {surgeryServices.map((service, idx) => renderServiceAccordion(service, idx + ortopediaServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Аккордеон Детская стоматология */}
      {(kidsServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Детская стоматология
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {kidsServices.map((service, idx) => renderServiceAccordion(service, idx + surgeryServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Имлпантация */}
      {(implantServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Имлпантация
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {implantServices.map((service, idx) => renderServiceAccordion(service, idx + kidsServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }

      {/* Ортодонтия */}
      {(ortodontServices.length > 0) &&
      <Accordion className={styles.lightAccordion} disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="hygiene-panel"
          id="hygiene-header"
        >
          <Typography component="h2" className={styles.accordionTitle}>
            Ортодонтия
          </Typography>
        </AccordionSummary>
        <AccordionDetails id="hygiene-panel" aria-labelledby="hygiene-header">
          <div className={styles.lightAccordion__inner}>
            {ortodontServices.map((service, idx) => renderServiceAccordion(service, idx + implantServices.length))}
          </div>
        </AccordionDetails>
      </Accordion>
      }
      
    </section>
  );
}