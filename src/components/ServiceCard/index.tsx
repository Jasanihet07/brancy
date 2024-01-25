import Image from "next/image";
import React from "react";
import { ServiceCardType } from "@/utils/types";
import style from "./servicecard.module.css";

const ServiceCard = ({ data }: ServiceCardType) => {
	return (
		<div className={style.service}>
			<div className={style.icon}>
				<Image src={data.icon} alt={data.heading} fill />
			</div>
			<p>{data.heading}</p>
			<p className={style.serviceDescription}>{data.serviceDescription}</p>
		</div>
	);
};

export default ServiceCard;
