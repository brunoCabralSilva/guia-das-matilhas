import React from 'react';
import '../css/transition.css';

export default class Transition extends React.Component {
	render() {
		return (
			<section className="transition">
				<div className="darkness-more"></div>
				<div className="transition-content">
					<h3 className="transition-text">
						Cê vai sentir algo fazendo pressão contra você. Não resista. Deslize por entre os espaços. Vá para além do reflexo... É isso aí. Você está quase...
					</h3>
					<h4 className="transition-author">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
				</div>
			</section>
		);
	}
}