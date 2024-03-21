
const Hero = (props) =>{
	return(
		<>
			<div>
				<p>{props.name}</p>
				<p>Альтер эго: {props.alterego}</p>
				<p>Род деятельности: {props.occupation}</p>
				<p>Друзья: {props.friends}</p>
				<p>Суперсила: {props.superpowers}</p>
				<p>О герое: {props.info}</p>
			    <img src={props.url} alt='супергерой' />
			</div>
		</>
	)
}
export default Hero