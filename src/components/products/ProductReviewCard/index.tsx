import Image from "next/image";
import Rating from "../Rating";

type Props = {
	data: {
		id: number;
		name: string;
		image: string;
		description: string;
		rating: number;
	};
};

const ProductReviewCard = ({ data }: Props) => {
	return (
		<div className="flex flex-col gap-4 rounded-xl bg-white p-[4%]">
			<div className="flex gap-4 items-center">
				<div className="w-[20%] max-w-[75px] rounded-full overflow-hidden relative aspect-square">
					<Image
						src={data.image}
						alt="person image"
						fill
						className="object-contain"
					></Image>
				</div>
				<div className="flex-1 flex sm:items-center max-sm:flex-col sm:gap-6 flex-wrap">
					<h6 className="text-body2 mb-0">{data.name}</h6>
					<Rating rating={data.rating} />
				</div>
			</div>
			<p className="text-gray text-caption1">{data.description}</p>
		</div>
	);
};

export default ProductReviewCard;
