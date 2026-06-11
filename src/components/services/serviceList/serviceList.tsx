import { ServiceCard } from "@/components/main-page/services/services";
import styles from "./styles.module.scss";

export default function ServiceList() {
  // Данные всех услуг с ID для создания ссылок
  const allServicesData = [
  {
    id: "detskaya-stomatologiya",
    title: "Детская стоматология",
    titleForForm: "Записаться к детскому стоматологу",
    description: "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
    imageLink: "services/servicesActual/detskay.png",
  },
  {
    id: "implantatsiya-zubov",
    title: "Имплантация зубов",
    titleForForm: "Консультация по имплантации",
    description: "хирургическая процедура, которая позволяет вживлять в костную ткань челюсти искусственный корень — титановый имплант.",
    imageLink: "services/servicesActual/implantacia.png",
  },
  {
    id: "ispravlenie-prikusa",
    title: "Ортодонтия",
    titleForForm: "Записаться к ортодонту",
    description: "Наша стоматология оказывает полный спектр услуг, направленный на исправление прикуса зубов.",
    imageLink: "services/servicesActual/ortodontia.png",
  },
  {
    id: "professionalnaya-gigiena",
    title: "Гигиена полости рта",
    titleForForm: "Записаться на профгигиену",
    description: "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
    imageLink: "services/servicesActual/gigiena.png",
  },
  {
    id: "rentgenodiagnostika",
    title: "Диагностика заболеваний зубов",
    titleForForm: "Записаться на снимок",
    description: "Позволяет выявить кариес, кисты, гранулемы и оценить состояние костной ткани.",
    imageLink: "services/servicesActual/diagnostika.png",
  },
  {
    id: "lechenie-zubov",
    title: "Лечение зубов",
    titleForForm: "Записаться на лечение",
    description: "Лечение зубов — процедура, которая на сегодняшний день является менее безболезненной и более простой, чем десятки лет назад.",
    imageLink: "services/servicesActual/lechenie.png",
  },
  {
    id: "esteticheskoe-vosstanovlenie-zubov",
    title: "Эстетическая стоматология",
    titleForForm: "Записаться на реставрацию",
    description: "Стоматология «32» оказывает полный спектр услуг по эстетическому восстановлению зубов.",
    imageLink: "services/servicesActual/estet.png",
  },
  {
    id: "protezirovanie-zubov",
    title: "Протезирование зубов",
    titleForForm: "Консультация по протезированию",
    description: "Протезирование зубов – это целый комплекс стоматологических услуг, с помощью которого восстанавливают функции зубов.",
    imageLink: "services/servicesActual/protezirovanie.png",
  },
  {
    id: "ambulatornye-hirurgicheskie-operacii",
    title: "Хирургическая стоматология",
    titleForForm: "Записаться на хирургические операции",
    description: "Стоматология «32» проводит полный перечень амбулаторных хирургических операций. Это операции, не требующие госпитализации пациента.",
    imageLink: "services/servicesActual/hirurg.png",
  },
  {
    id: "vektor-terapiya", // id оставлен прежним, но название и описание изменены
    title: "Пародонтология",
    titleForForm: "Записаться к пародонтологу",
    description: "Пародонтология — это раздел стоматологии, занимающийся профилактикой, диагностикой и лечением заболеваний тканей, окружающих зуб (десен, связочного аппарата и костной ткани).",
    imageLink: "services/servicesActual/paradontologia.png",
  },
];

  return (
    <div className={`${styles.services_list}`}>
      {allServicesData.map((service) => (
        <ServiceCard
          key={service.id}
          serviceId={service.id}
          title={service.title}
          description={service.description}
          imageLink={service.imageLink}
          titleForForm={service.titleForForm}
        />
      ))}
    </div>
  );
}
