interface ResponsiveImageProps {
	src: string;
	alt: string;
}

const ListIcon = ({ src, alt }: ResponsiveImageProps) => (
	<div className="w-full">
		<img className="w-full object-cover" src={src} alt={alt} />
	</div>
);

export default ListIcon;
