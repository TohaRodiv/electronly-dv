import { Link } from "#ui/Link";
import { CategoryDTO } from "#types/DTO";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";

type TProps = {
	category: CategoryDTO
} & HTMLElementAttributes<HTMLAnchorElement>

export const Category: React.FC<TProps> = ({ category, className, ...anchorProps }: TProps) => {

	if (!category) return null;

	return (
		<Link
			href={`/catalog/${category.id}`}
			className={classNames("category", className)}
			{...anchorProps} >

			<div className="category__head">{category.title}</div>

		</Link>
	);
};