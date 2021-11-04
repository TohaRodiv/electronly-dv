import { CategoryDTO } from "#types/DTO";
import { Link } from "#ui/Link";


export function renderCategories(categories: CategoryDTO[]): JSX.Element {
	if (!categories) return null;

	return (
		<ul>
			{categories.map((category) => (
				<li key={category.id}>
					<Link
						as={`/catalog/${category.id}`}
						href={{
							pathname: "/catalog/[[...id]]",
							query: {id: [category.id]}
						}}>
						{category.title}
					</Link>

					{category.childs && renderCategories(category.childs)}
				</li>
			))}
		</ul>
	);
}