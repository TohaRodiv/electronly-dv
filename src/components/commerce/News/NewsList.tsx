import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import React from "react";
import { News } from "./News";
import { BlogArticle } from "#types/DTO";


type TProps = {
	news: BlogArticle[]
} & HTMLElementAttributes<HTMLUListElement>


export const NewsList: React.FC<TProps> = ({ news, className, ...props }: TProps): JSX.Element => {

	return (
		<ul className={classNames("news-list", className)} {...props}>
			{
				news && news.map(item => (
					<li className="news-list__item" key={item.id}>
						<News news={item} className="news-list__news" />
					</li>
				))
			}
		</ul>
	);
};