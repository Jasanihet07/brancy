import StarIcon from "@/public/icons/star.svg";
import clsx from "clsx";

type Props = {
	rating: number;
	reviewCount?: number;
};

const Rating = ({ rating, reviewCount }: Props) => {
	return (
		<div className="flex items-center gap-4">
			<div className="flex">
				{[0, 1, 2, 3, 4].map((x) => (
					<StarIcon
						key={x}
						className={clsx("h-5 w-5 flex-shrink-0", {
							["text-yellow"]: rating > x,
							["text-gray/20"]: rating <= x,
						})}
						aria-hidden="true"
					/>
				))}
			</div>

			{reviewCount && <p className="text-gray">{reviewCount} reviews</p>}
		</div>
	);
};

export default Rating;
