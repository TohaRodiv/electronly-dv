import type { BlogArticle } from "#types/DTO";

export const news: BlogArticle[] = [
	{
		id: 1,
		categoryId: 1,
		date: "13.06.2021",
		title: "Добро пожаловать на сайт!",
		content: "С радостью хотим сообщить об открытии нашего нового сайта! Мы рады каждому, кто посещает наш ресурс. Надеемся, что здесь вы найдёте то, что искали в столь большой сети Интернет. Но если на сайте ваши поиски будут затруднены, позвоните нам или оставьте заявку онлайн. Мы обязательно свяжемся с вами в ближайшее рабочее время и ответим на все интересующие вас вопросы.",
		image: "https://st.depositphotos.com/1043957/2407/i/450/depositphotos_24073749-stock-photo-integrated-microchip.jpg",
	},
	{
		id: 2,
		categoryId: 1,
		date: "19.06.2021",
		title: "Обновление условий акций!",
		content: "Уважаемые гости нашего ресурса! Нами были установлены новые правила проведения акций для всех наших клиентов. Для уточнения изменившихся условий оставьте заявку на сайте или позвоните нам! Мы ответим на все интересующие вас вопросы.",
		image: "https://images.ua.prom.st/1744143903_w640_h640_elektronika.jpg",
	},
	{
		id: 3,
		categoryId: 1,
		date: "5.07.2021",
		title: "У нас пополнение ассортимента товаров!",
		content: "Дорогие посетители нашего сайта! Спешим вас уведомить о пополнение предоставляемого нами ассортимента товаров. Чтобы ознакомиться со списком всех новых позиций, посетите наш «Каталог». Если у вас есть вопросы по текущему ассортименту товаров на сайте, оставьте заявку онлайн или позвоните нам.",
		image: "https://productcenter.ru/images/486928-riemont-eliektronnykh-plat-upravlieniia-1280x768.jpg",
	},
];