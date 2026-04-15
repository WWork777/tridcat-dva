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
      imageLink: "services/1.png",
    },
    {
      id: "implantatsiya-zubov",
      title: "Имплантация зубов",
      titleForForm: "Консультация по имплантации",
      description: "хирургическая процедура, которая позволяет вживлять в костную ткань челюсти искусственный корень — титановый имплант.",
      imageLink: "services/2.png",
    },
    {
      id: "ispravlenie-prikusa",
      title: "Исправление прикуса",
      titleForForm: "Записаться к ортодонту",
      description: "Наша стоматология оказывает полный спектр услуг, направленный на исправление прикуса зубов.",
      imageLink: "services/prikus.png",
    },
    {
      id: "otbelivanie-zubov",
      title: "Отбеливание зубов",
      titleForForm: "Записаться на отбеливание",
      description: "Белоснежные зубы – это неотъемлемый атрибут шикарной здоровой «голливудской» улыбки.",
      imageLink: "services/otbel.png",
    },
    {
      id: "professionalnaya-gigiena",
      title: "Профессиональная гигиена",
      titleForForm: "Записаться на профгигиену",
      description: "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
      imageLink: "services/gigiena.png",
    },
    {
      id: "rentgenodiagnostika",
      title: "Рентгенодиагностика",
      titleForForm: "Записаться на снимок",
      description: "С помощью рентгенодиагностики стоматологи определяют глубину поражения зуба кариесов, наличие кист и гранулем, оценивают состояние костных тканей.",
      imageLink: "services/6.png",
    },
    {
      id: "vektor-terapiya",
      title: "Вектор терапия",
      titleForForm: "Записаться на Вектор-терапию",
      description: "Вектор терапия – это методика, при которой для лечения заболеваний пародонта применяется аппарат лазерной шлифовки «Вектор».",
      imageLink: "services/vector.png"
    },
    {
      id: "lechenie-zubov",
      title: "Лечение зубов",
      titleForForm: "Записаться на лечение",
      description: "Лечение зубов — процедура, которая на сегодняшний день является менее безболезненной и более простой, чем десятки лет назад.",
      imageLink: "services/lechenie.png"
    },
    {
      id: "esteticheskoe-vosstanovlenie-zubov",
      title: "Эстетическое восстановление зубов",
      titleForForm: "Записаться на реставрацию",
      description: "Стоматология «32» оказывает полный спектр услуг по эстетическому восстановлению зубов.",
      imageLink: "services/restv.png"
    },
    {
      id: "protezirovanie-zubov",
      title: "Протезирование зубов",
      titleForForm: "Консультация по протезированию",
      description: "Протезирование зубов – это целый комплекс стоматологических услуг, с помощью которого восстанавливают функции зубов.",
      imageLink: "services/3.png"
    },
    {
      id: "protezirovanie-zubov-na-implantah",
      title: "Протезирование зубов на имплантах",
      titleForForm: "Консультация по протезированию на имплантах",
      description: "Имплантация зубов — это методика, позволяющая вживлять в десну искусственные корни в виде имплантов.",
      imageLink: "services/impNaZub.png"
    },
    {
      id: "udalenie-zubov",
      title: "Удаление зубов",
      titleForForm: "Записаться на удаление зубов",
      description: "Бывают ситуации, когда никакие методы стоматологического лечения не приносят результатов, и единственный выход – это удалить зуб.",
      imageLink: "services/udalenie.png"
    },
    {
      id: "ambulatornye-hirurgicheskie-operacii",
      title: "Амбулаторные хирургические операции",
      titleForForm: "Записаться на хирургические операции",
      description: "Стоматология «32» проводит полный перечень амбулаторных хирургических операций. Это операции, не требующие госпитализации пациента.",
      imageLink: "services/hirurg.png"
    },
    {
      id: "zubnye-ukrasheniya",
      title: "Зубные украшения",
      titleForForm: "Записаться на установку украшений",
      description: "Сейчас украшения (скайсы, твинклзы, стразы) можно установить так, что в будущем их можно поменять или убрать совсем.",
      imageLink: "services/ukrash.png"
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
