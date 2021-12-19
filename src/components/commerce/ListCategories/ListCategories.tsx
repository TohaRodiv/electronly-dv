import { CategoryDTO } from "#types/DTO";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import { Category } from "./Category";

type TProps = {
	categories: CategoryDTO[]
} & HTMLElementAttributes <HTMLUListElement>

export const ListCategories: React.FC<TProps> = ({ categories, className, ...ulProps }: TProps): JSX.Element => (
	<ul
		className={classNames("list-categories", className)}
		{...ulProps} >

		{
			categories && categories.map(category => {
				if (!category) return null;
				
				return (
					<li key={category.id} className="list-categories__item">
						<Category category={category} />
						{
							category.childs && category.childs.length > 0 && <ListCategories categories={category.childs} />
						}
					</li>
				);
			})
		}

	</ul>
);