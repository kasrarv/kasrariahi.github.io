import { Container, row, col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import wordpress from "../assets/img/wordpress.svg";
import colorsharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                    <div className='skill-bx'>
                        <h2>
                            skills
                        </h2>
                        <p>
                        very passionate Web Developer who has experience in javascript, WordPress, and OSINT related investigations such as legit work and advanced reverse searches
                        </p>
                        <Carousel responsive={responsive} infinite={true} classNames='kill-slider'>
                            <div className='item'>
                                <img src={meter1} alt='image' />
                                <h1>Web Development</h1>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='image' />
                                <h1>OSINT Investigation</h1>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt='image' />
                                <h1>Front End Design</h1>
                            </div>
                            <div className='item'>
                                <img src={meter4} alt='image' />
                                <h1>UI/UX Desig</h1>
                            </div>
                            <div className='item'>
                                <img src={wordpress} alt='image' />
                                <h1>WordPress</h1>
                            </div>
                        </Carousel>
                    </div>
            </Container>
            <img className='background-image-left' src={colorsharp} />
        </section>
      )
}