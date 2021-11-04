import Head from "next/head";
import { Section } from "#skeleton/Section";
import { Container } from "react-grid-system";
import { NextPage } from "next";


const Contacts: NextPage = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Контакты</title>
			</Head>
			<Container>
				<Section>
					<h3>Контакты</h3>
					<p>
						Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Взобравшись, они, образ речью строчка имени, подпоясал букв великий однажды мир там курсивных своих назад ручеек. Гор, текстами? То власти даже эта.
					</p>
				</Section>
			</Container>
		</>
	);
};


export default Contacts;