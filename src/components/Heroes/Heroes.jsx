import styles from './Heroes.module.css'

const Hero = (props) =>{
	return(
		<>
			<div className={styles.border}>
				<p className={styles.name}>{props.name}</p>
				<p className={styles.text}>Альтер эго: {props.alterego}</p>
				<p className={styles.text}>Род деятельности: {props.occupation}</p>
				<p className={styles.text}>Друзья: {props.friends}</p>
				<p className={styles.text}>Суперсила: {props.superpowers}</p>
				<p className={styles.text}>О герое: {props.info}</p>
			    <img className={styles.img} src={props.url} alt='супергерой' />
			</div>
		</>
	)
}
export default Hero