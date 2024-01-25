import Image from "next/image";
import { testimonialCardType } from "@/utils/types";
import styles from "./testimonialCard.module.css";

const TestimonialCard = ({ data }: testimonialCardType) => {
	return (
		<div className={styles.testimonialCard}>
			<p className={styles.testimonialDescription}>{data.description}</p>
			<div className={styles.testimonialWrapper}>
				<div className={styles.testimonialPersonImage}>
					<Image src={data.image} alt="testimonial person" fill />
				</div>
				<p className={styles.testimonialPersonName}>{data.name}</p>
				<p className={styles.testimonialPersonDesignation}>
					{data.designation}
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
