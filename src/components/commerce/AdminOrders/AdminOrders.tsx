type TProps = {
	orders: any[]
}

export const AdminOrders: React.FC<TProps> = ({ orders }: TProps): JSX.Element => {
	return (
		<ul className="admin-orders">
			{
				orders.map(item => (
					<li key={item.id} className="admin-orders__item">
						<div className="admin-order">
							<div className="admin-order__header">
								<h3 className="admin-order__name">{item.fio}</h3>
								{item.status &&
									<div className="admin-order__status">{item.status}</div>
								}
							</div>
							{item.date &&
								<div className="admin-order__date">{item.date}</div>
							}
							<ul className="admin-order-contact admin-order__contact">
								{item.tel &&
									<li className="admin-order-contact__tel">
										<a
											href={`tel:${item.tel.replaceAll(/[\D]+/g, "")}`}
											className="admin-order-contact__link">
											{item.tel}
										</a>
									</li>
								}
								{item.email &&
									<li className="admin-order-contact__email">
										<a href={`mailto:${item.email}`} className="admin-order-contact__link">
											{item.email}
										</a>
									</li>
								}
							</ul>
							{item.comment &&
								<div className="admin-order__comment">
									{item.comment}
								</div>
							}
						</div>
					</li>
				))
			}
		</ul>
	);
};