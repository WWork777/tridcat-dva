"use client";
import styles from './Prices.module.scss';
import servicesData from '@/data/services.data';

// Массивы ID категорий
const therapyIds = [
  "pervichnyy-priem", "dispansernyy-priem", "povtornyy-priem", "optragate", "kofferdam",
  "vremennaya-plomba", "vremennaya-plomba-sits", "vremennaya-plomba-devit", "plomba-1-5-6",
  "plomba-2-3", "plomba-4", "polirovka-garantiya", "pulpotomiya", "ekstirpatsiya-pulpy",
  "vosstanovlenie-stenki", "snyatie-plomby", "lechebnaya-prokladka", "plomba-sits",
  "otsrochennoe-lechenie", "korrektsiya-plomby", "bokovoy-zub-menshe", "peredniy-zub-menshe",
  "plombirovanie-kanala", "plombirovanie-lateral", "zakrytie-perforatsii", "diagnosticheskoe-preparirovanie",
  "obrabotka-kanala", "obrabotka-horoshiy", "obrabotka-plohoy", "vremennoe-plombirovanie",
  "medikamentoznaya-obrabotka", "udalenie-shtifta", "rasplombirovka-pasta", "rasplombirovka-fosfat",
  "rasplombirovka-rezorsin", "rasplombirovka-termafil", "rasplombirovka-guttapercha", "soshlifovyvanie",
  "ultrazvukovoe-rasshirenie", "izbiratelnoe-polirovanie", "esteticheskaya-restavratsiya",
  "bokovoy-shtift-menshe", "peredniy-shtift-menshe", "peredniy-shtift-bolshe", "bokovoy-shtift-bolshe",
  "dopolnitelnyy-shtift", "shtiftovyy-zub", "anesteziya-provodnikovaya", "anesteziya-applikatsionnaya",
  "anesteziya-infiltratsionnaya", "anesteziya-sochetannaya", "povyazka", "lechenie-pod-mikroskopom-1chas",
  "lechenie-pod-mikroskopom-30min", "plombirovanie-kanala-vertikalnaya-kondensatsiya"
];

const hygieneIds = [
  "lechenie-zubov", "professionalnaya-gigiena", "otbelivanie-zubov", "gigiena-optragate",
  "gigiena-kofferdam", "kompleksnaya-gigiena", "kompleksnaya-gigiena-molochnyy",
  "kompleksnaya-gigiena-smennyy", "kompleksnaya-gigiena-ortodont", "kompleksnaya-gigiena-ortodont-deti",
  "udalenie-myagkogo-naleta-zub", "udalenie-myagkogo-naleta-chelyust", "udalenie-myagkogo-naleta-polost",
  "razmyagchenie-tverdyh-otlozheniy", "udalenie-pigmentirovannogo-naleta", "profilakticheskaya-chistka-molochnyy",
  "profilakticheskaya-chistka-smennyy", "profilakticheskaya-chistka-zub", "ultrazvukovoe-udalenie-zub",
  "ultrazvukovoe-udalenie-molochnyy", "ultrazvukovoe-udalenie-smennyy", "ultrazvukovoe-udalenie-polost",
  "glubokoe-ftorirovanie", "glubokoe-ftorirovanie-molochnyy", "ftorirovanie-apf", "ustranenie-giperchuvstvitelnosti",
  "remineraliziruyushchiy-gel", "otbelivanie-amazing-white", "otbelivanie-philips-zoom", "individualnaya-kapa",
  "obuchenie-gigiene", "gigiena-anesteziya-provodnikovaya", "gigiena-anesteziya-applikatsionnaya",
  "gigiena-anesteziya-infiltratsionnaya", "gigiena-anesteziya-sochetannaya", "gigiena-povyazka"
];

const ortopediaIDS = [
  "protezirovanie-zubov-na-implantah", "protezirovanie-zubov", "ortopediya-pervichnyy-osmotr",
  "ortopediya-pervichnyy-kpl", "ortopediya-povtornyy-primerka", "ortopediya-povtornyy-sdacha",
  "ottisk-alginat", "ottisk-c-silikon", "ottisk-a-silikon", "ottisk-diagnosticheskie",
  "issledovanie-modeley", "intraoralnoe-skanirovanie", "diagnosticheskoe-modelirovanie",
  "analiz-okklyuzii", "licevaya-duga", "hirurgicheskiy-shablon", "vinir-keramicheskiy",
  "koronka-plastmassovaya", "koronka-celnolitoy", "individualizatsiya-koronok", "oblicovka-plastmassoy",
  "keramicheskoe-oformlenie", "koronka-celnolitoy-napylenie", "metallokeramicheskaya-koronka",
  "metallokeramika-implant", "emax-koronka", "emax-vinir", "emax-vkladka", "vinir-emax-refraktor",
  "koronka-zirkoniy-emax", "shtiftovaya-vkladka-zirkoniy", "koronka-oksid-zirkoniya", "multiunit",
  "protez-2-implant", "protez-4-implant-balka", "protez-6-implant", "protez-6-implant-balka",
  "litaya-koronka-implant", "emax-implant", "emax-implant-straumann", "emax-implant-alphabio",
  "abutment-vremennyy", "abutment-standartnyy", "abutment-individualnyy", "individualizatsiya-abutment",
  "polnyy-semnyy-protez", "individualnaya-lozhka", "registratsiya-prikusa", "voskoy-shablon",
  "udalenie-shtifta-ortopediya", "shtiftovo-kultevaya-odnokornevoy", "shtiftovo-kultevaya-mnogokornevoy",
  "shtiftovo-kultevaya-zirkoniy", "chastichnyy-semnyy-protez", "nylonovyy-protez", "privarka-zuba",
  "pochinka-metallokeramiki", "izgotovlenie-attachmenta", "frezerovannyy-element", "sharovoy-attachment",
  "dopolnitelnyy-otrostok", "zamenamatrizy", "gigiena-semnyy-protez", "kosmeticheskaya-plastinka",
  "korrektsiya-posle-garantii", "litoy-bazis", "armirovanie-proteza", "izolyatsiya-torusa",
  "perebazirovka-proteza", "klammer-gnutyy", "klammer-gnutyy-napylenie", "klammer-opornouderzhivayushchiy",
  "klammer-opornouderzhivayushchiy-napylenie", "byugel-slozhnyy", "ogneupornaya-model",
  "fiksatsiya-koronki-vremennaya", "fiksatsiya-sits", "fiksatsiya-adgezivnaya", "povtornaya-fiksatsiya-implant",
  "snyatie-shtampovannoy-koronki", "snyatie-litoy-koronki", "snyatie-zirkoniy-koronki",
  "polnyy-semnyy-protez-master", "chastichnyy-semnyy-protez-master", "garnitur-keramicheskih-zubov"
];

const SurgeryIds = [
  "ambulatornye-hirurgicheskie-operacii", "udalenie-zubov", "hirurgiya-pervichnyy-osmotr",
  "hirurgiya-pervichnyy-kpl", "hirurgiya-povtornyy-priem", "hirurgiya-optragate", "udalenie-molochnogo-zuba",
  "udalenie-odnokornevogo", "udalenie-mnogokornevogo", "udalenie-atravmaticheskoe", "udalenie-slozhnoe",
  "udalenie-stenki-zuba", "udalenie-ekzostoza", "udalenie-retinirovannogo", "cistektomiya",
  "rezektsiya-verhushki", "gimisektsiya", "lechenie-perikoronita", "vskrytie-odontogennogo-abscessa",
  "kuretaž-lunki", "vskrytie-abscessa-polosti-rta", "gingivotomiya", "gingivektomiya",
  "plastika-uzdechki-verhney-guby", "plastika-uzdechki-nizhney-guby", "plastika-uzdechki-yazyka",
  "vestibuloplastika", "zakrytie-recessii-odin-zub", "zakrytie-recessii-neskolko-zubov", "vzyatie-transplantata",
  "plastika-perforatsii-pazuhi", "nalozhenie-shva", "ostanovka-krovotecheniya-alvozhel",
  "ostanovka-krovotecheniya-tamponada", "ostanovka-krovotecheniya-gemostatic", "snyatie-shvov",
  "gingivoplastika-implant-nasha", "gingivoplastika-implant-storonnaya", "gingivoplastika-udlinenie-koronki"
];

const KidsIds = [
  "detskaya-stomatologiya", "detskaya-pervichnyy-kpl", "detskaya-pervichnyy-osmotr",
  "detskaya-dispansernyy-priem", "detskaya-povtornyy-priem", "detskaya-adaptatsionnyy-priem",
  "detskaya-optragate", "detskaya-kofferdam", "detskaya-tsvetnaya-plomba", "detskaya-plomba",
  "detskaya-plomba-posle-endodontii", "detskaya-lechebnaya-prokladka", "detskaya-vremennaya-plomba-devit",
  "detskaya-snyatie-plomby", "detskaya-lechenie-pulpita-pulpotek", "detskaya-vremennaya-plomba",
  "detskaya-polirovka-plomby", "detskaya-vremennoe-plombirovanie-kalasept", "detskaya-plombirovanie-kanala",
  "detskaya-plombirovanie-forfenan-pasta", "detskaya-plombirovanie-forfenan-zhidkost", "detskaya-pulpotomiya",
  "detskaya-ekstirpatsiya-pulpy", "detskaya-obrabotka-kanala", "detskaya-vremennoe-plombirovanie",
  "detskaya-remineraliziruyushchiy-gel", "detskaya-glubokoe-ftorirovanie", "detskaya-gigiena-molochnyy",
  "detskaya-gigiena-smennyy", "detskaya-ultrazvuk-molochnyy", "detskaya-ultrazvuk-smennyy",
  "detskaya-polirovka-garantiya", "detskaya-germetizatsiya-molochnyy", "detskaya-germetizatsiya-postoyannyy",
  "detskaya-germetizatsiya-invazivnaya", "detskaya-applikatsiya-lekarstva", "detskaya-lechebnaya-povyazka",
  "detskaya-anesteziya-provodnikovaya", "detskaya-anesteziya-applikatsionnaya", "detskaya-anesteziya-infiltratsionnaya",
  "detskaya-anesteziya-sochetannaya", "detskaya-povyazka"
];

const ImplantIds = [
  "implantatsiya-zubov", "implantatsiya-alphabio", "implantatsiya-straumann", "otkrytie-implantata-alphabio",
  "otkrytie-implantata-straumann", "udalenie-implantata-prostoe", "udalenie-implantata-slozhnoe",
  "medikamentoznaya-obrabotka-desny", "lo-skutnaya-operatsiya", "kostnaya-plastika-rasshcheplenie",
  "plastika-alveolyarnogo-otrostka", "korrektsiya-alveolyarnogo-otrostka", "osteoplastika-kollapan",
  "sinus-lifting-otkrytyy-bazovyy", "sinus-lifting-otkrytyy-15-20-1gr", "sinus-lifting-otkrytyy-15-20-2gr",
  "sinus-lifting-otkrytyy-20-30-1gr", "sinus-lifting-otkrytyy-20-30-2gr", "sinus-lifting-otkrytyy-30-40-1gr",
  "sinus-lifting-otkrytyy-30-40-2gr", "sinus-lifting-zakrytyy-1-2mm", "sinus-lifting-zakrytyy-2-3mm",
  "sinus-lifting-zakrytyy-3-4mm", "implantatsiya-anesteziya-provodnikovaya", "implantatsiya-anesteziya-applikatsionnaya",
  "implantatsiya-anesteziya-infiltratsionnaya", "implantatsiya-anesteziya-sochetannaya", "implantatsiya-povyazka",
  "implantatsiya-mini-vint-bolshoy", "implantatsiya-mini-vint-malyy"
];

const OrtodontIds = [
  "ispravlenie-prikusa", "ortodontiya-pervichnyy-kpl", "ortodontiya-dispansernyy-priem", "ortodontiya-osmotr",
  "ortodontiya-povtornyy-priem", "ortodontiya-optragate", "ortodontiya-naznachenie-rezhima-vosk",
  "ortodontiya-naznachenie-rezhima-gigiena-malyy", "ortodontiya-naznachenie-rezhima-gigiena-bolshoy",
  "ortodontiya-issledovanie-modeley", "ortodontiya-ottisk-alginat", "ortodontiya-izgotovlenie-modeli",
  "ortodontiya-funktsionalnye-zhevatelnye-proby", "ortodontiya-aktivatsiya-nesemnogo-apparata-odna-chelyust",
  "ortodontiya-aktivatsiya-nesemnogo-apparata-dve-chelyusti", "ortodontiya-smena-ligatury",
  "ortodontiya-ligatura-kaboyashi", "ortodontiya-pripasovka-dugi", "ortodontiya-fiksatsiya-provolochnogo-reteynera",
  "ortodontiya-snyatie-breketa", "ortodontiya-fiksatsiya-ortodonticheskogo-koltsa", "ortodontiya-zamena-dugi-niti",
  "ortodontiya-zamena-dugi-cuniti", "ortodontiya-zamena-dugi-tma", "ortodontiya-ustanovka-dugi-niti-cuniti",
  "ortodontiya-ustanovka-pruzhiny-rasshiryayushchey", "ortodontiya-ustanovka-pruzhiny-styagivayushchey",
  "ortodontiya-ustanovka-kryuchka-dlya-distalizatsii", "ortodontiya-ustanovka-tyagi-mezhchelyustnoy",
  "ortodontiya-ustanovka-dopolnitelnoy-pruzhiny", "ortodontiya-izgotovlenie-semnego-apparata-s-vinkom",
  "ortodontiya-aktivatsiya-semnego-apparata", "ortodontiya-izgotovlenie-semnego-apparata-bez-vinka",
  "ortodontiya-izgotovlenie-semnego-apparata-funktsionalnogo", "ortodontiya-izgotovlenie-retennoy-plastiny",
  "ortodontiya-izgotovlenie-apparata-frenkelya", "ortodontiya-ustanovka-kappovogo-apparata",
  "ortodontiya-korrektsiya-semnego-apparata", "ortodontiya-brekety-damon-q", "ortodontiya-dopolnitelnyy-breketa-damon-q",
  "ortodontiya-brekety-damon-clear", "ortodontiya-dopolnitelnyy-breketa-damon-clear", "ortodontiya-brekety-inspire-ice",
  "ortodontiya-dopolnitelnyy-breketa-inspire-ice", "ortodontiya-brekety-elite-mini-twin",
  "ortodontiya-dopolnitelnyy-breketa-elite-mini-twin", "ortodontiya-snyatie-breketov-s-reteynerom",
  "ortodontiya-fiksatsiya-breketa-kompozit", "ortodontiya-povtornaya-fiksatsiya-breketa",
  "ortodontiya-fiksatsiya-nakusochnogo-breketa", "ortodontiya-ustanovka-shchechnoy-trubki",
  "ortodontiya-polirovanie-konstruktsii", "provizornaya-koronka-vremennaya", "protez-4-implanta-balka-multiunit-zircon",
  "protez-4-implanta-balka-multiunit-pmma", "protez-6-implanta-balka-multiunit-pmma"
];

const allCategoryIds = new Set([
  ...therapyIds, ...hygieneIds, ...ortopediaIDS, ...SurgeryIds,
  ...KidsIds, ...ImplantIds, ...OrtodontIds
].map(id => id.trim()));

export default function Prices() {
  const allServices = Object.entries(servicesData).map(([key, value]) => ({
    ...value,
    cleanId: key.trim()
  }));

  const filterServices = (ids: string[]) => {
    const idSet = new Set(ids.map(id => id.trim()));
    return allServices.filter(service => idSet.has(service.cleanId));
  };

  const otherServices = allServices.filter(service => !allCategoryIds.has(service.cleanId));

  return (
    <section className={styles.prices_container}>
      <PriceSection title="Терапия" services={filterServices(therapyIds)} />
      <PriceSection title="Гигиена и отбеливание" services={filterServices(hygieneIds)} />
      <PriceSection title="Ортопедия" services={filterServices(ortopediaIDS)} />
      <PriceSection title="Хирургия" services={filterServices(SurgeryIds)} />
      <PriceSection title="Детская стоматология" services={filterServices(KidsIds)} />
      <PriceSection title="Имплантация" services={filterServices(ImplantIds)} />
      <PriceSection title="Ортодонтия" services={filterServices(OrtodontIds)} />
      
      {otherServices.length > 0 && (
        <PriceSection title="Другие услуги" services={otherServices} />
      )}
    </section>
  );
}

function PriceSection({ title, services }: { title: string, services: typeof allServices }) {
  if (services.length === 0) return null;

  return (
    <div className={styles.section}>
      <h2 className={styles.section_title}>{title}</h2>
      <div className={styles.table_wrapper}>
        <table className={styles.prices_table}>
          <thead>
            <tr className={styles.header_row}>
              <th className={styles.header_cell}>Наименование услуги</th>
              <th className={styles.header_cell_price}>Цена</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.cleanId} className={styles.table_row}>
                <td className={styles.table_cell}>
                  <div className={styles.service_name}>{service.title || service.name}</div>
                  {service.description && (
                    <div className={styles.service_description}>{service.description}</div>
                  )}
                </td>
                <td className={styles.table_cell_price}>{service.price || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}