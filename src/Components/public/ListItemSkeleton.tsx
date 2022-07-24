const ListItemSkeleton = () => (
	<li className="flex py-4 border-b border-b-grey gap-4 h-20 items-center last:border-b-0 animate-pulse">
		<div className="w-16 h-full bg-slate-200 rounded-lg" />
		<div className="flex justify-between items-center grow h-full">
			<div className="h-full">
				<div className="w-8 h-[20px] mb-2 rounded-md bg-slate-200" />
				<div className="w-24 h-[16px] mt-2 rounded-md bg-slate-200" />
			</div>
			<div className="w-16 max-w-1/4 h-[20px] mb-2 rounded-md bg-slate-200 shrink" />
		</div>
	</li>
);

export default ListItemSkeleton;
