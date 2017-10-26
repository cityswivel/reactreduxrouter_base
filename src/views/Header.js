import React from 'react'
import { Link } from 'react-router-dom'
// The Header creates links that can be used to navigate
// between routes.

const styles = {
	li : {
		display:'inline-block',
		margin: 15
	},
	ul : {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		textAlign:'center'
	}
}
const Header = () => (
<header style={{background:'rgb(63, 109, 151)',padding:15,position:'sticky',zIndex:'3',top:'0'}}>
	<nav>
		<ul style={styles.ul}>
			<li style={styles.li}><Link to='/test'>test</Link></li>
			<li style={styles.li}><Link to='/'>home</Link></li>
		</ul>
	</nav>
</header>
)

export default Header
