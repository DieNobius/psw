import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import './HomePage.css'
import yoda from '../../img/yoda.webp'
import cload from '../../img/cload.svg'
import ellipse from '../../img/ellipse.svg'

function HomePages() {
	return (
		<div className="home__page">
			<Header />
			<div>Home Page</div>
			{/* <div className="home">
				<div className="home__left">
					<div className="home__text-top">
						<p>
							<strong>Find</strong> all your favorite <strong>character</strong>
						</p>
					</div>

					<div className="home__text-bottom">
						<p>
							You can find out all the information about your favorite character
						</p>
					</div>
					<Button />
				</div>
				<div className="home__right">
					<div className="container__yoda">
						<img className="img__yoda" src={yoda} alt="" />
					</div>
					<img className="img__cload-right" src={cload} alt="" />
					<img className="img__cload-left" src={cload} alt="" />
					<img className="img__yoda-ellipse" src={ellipse} alt="" />
				</div>
			</div> */}
		</div>
	)
}

export default HomePages
