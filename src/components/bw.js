import React from 'react';
import { Art } from './art';

export const Bw = (props) => {
	return (
		<>
			{props.bw.map((art) => (
				<Art
					key={art.id}
					id={art.id}
					image={art.image}
					name={art.name}
					technique={art.technique}
					sold={art.sold}
					overview={art.overview}
					size={art.size}
				/>
			))}
		</>
	);
};
