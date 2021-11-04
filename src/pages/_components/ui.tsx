import { Section } from "#skeleton/Section";
import { NextPage } from "next";
import { Container } from "react-grid-system";
import { Logo } from "#ui/Logo";
import { Button } from "#ui/Button";
import { Icon } from "#ui/Icon";
import { Link } from "#ui/Link";

const UI: NextPage<unknown> = (): JSX.Element => (
	<Container>
		<div style={{backgroundColor: "#000"}}>
			<Section>
				<Logo />
			</Section>
		</div>
		<Section>
			<Button variant="primary">Button primary</Button>
			<Button variant="action">Button action</Button>
			<Button>Button default</Button>
			<Button>
				<Icon name="check" /> With icon
			</Button>
		</Section>
		<Section>
			<Icon name="square" /> <Icon name="check" /> <Icon name="times" />
		</Section>
		<Section>
			<Link href="">Link</Link>
			<br />
			<Link href=""><Icon name="hand-point-right"/> Icon link</Link>
		</Section>
	</Container>
);

export default UI;