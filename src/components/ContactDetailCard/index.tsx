import { ContactDetailType } from "@/utils/types";
import style from "./contactdetail.module.css";
import { SVGProps, cloneElement } from "react";
import Image from "next/image";

const ContactDetail = ({ data }: ContactDetailType) => {
	// const Icon = (props: SVGProps<SVGSVGElement>) => {
	// 	const Ele = () => data.icon;
	// 	return cloneElement(<Ele />, {
	// 		...props,
	// 	});
	// };

	const Icon = data.icon;

	return (
		<div className={style.contactDetails}>
			<div className="p-3 aspect-square rounded-md bg-green text-white">
				<Icon className="h-5" />
			</div>

			<p className={style.description}>{data.description}</p>
		</div>
	);
};

export default ContactDetail;
