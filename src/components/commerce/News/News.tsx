import { BlogArticle } from "#types/DTO";
import { HTMLElementAttributes } from "#types/HTMLElementAttributes";
import classNames from "classnames";
import { Link } from "#ui/Link";

type TProps = {
	news: BlogArticle
} & HTMLElementAttributes<HTMLDivElement>


export const News: React.FC<TProps> = ({ news, className, ...props }: TProps): JSX.Element => {

	const href = `/news/${news.id}`;
	return (
		<div className={classNames("news", className)} {...props}>
			<div className="news__image-wrapper">
				<img src={news.image} alt="" className="news__image" />
			</div>
			<div className="news__body">
				<h3 className="news__head">
					<Link href={href} className="news__head-link">{news.title}</Link>
				</h3>
				<div className="news__description">
					{news.content.substring(0, 120)}
					{news.content.length > 120 && (
						<>
							...&nbsp;
							<Link href={href}>Подробнее</Link>
						</>
					)}
				</div>
				<div className="news__date">{news.date}</div>
			</div>
		</div >
	);
};