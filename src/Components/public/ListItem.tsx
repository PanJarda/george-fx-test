interface ListItemProps {
	icon?: JSX.Element;
	title?: string;
	subtitle?: string;
	badge?: string | JSX.Element;
}

const ListItem = ({ subtitle, icon, title, badge }: ListItemProps) => (
	<li className="flex py-4 border-b border-b-grey gap-4 h-20 items-center last:border-b-0">
		<div className="w-16">{icon}</div>
		<div className="flex justify-between grow items-center">
			<div>
				{title && <h2 className="text-md">{title}</h2>}
				{subtitle && <p className="text-sm">{subtitle}</p>}
			</div>
			{badge && <div>{badge}</div>}
		</div>
	</li>
);

export default ListItem;
