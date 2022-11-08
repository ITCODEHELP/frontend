import Button from "../../../UI/linksAndButtons/Button";
import LinkUnderline from "../../../UI/linksAndButtons/Link";
import classes from "./Hero.module.css";
import heroImage from "../../../../images/HeroImage.jpg";
import Heading from "../../../UI/Headings/Heading";

export default function hero() {
   return (
      <section className={classes.heroSectionDiv}>
         <div className={classes.contentSection}>
            <Heading
               beforeSpan=""
               span="Automatic "
               afterSpan="dataset generation, minus the hassle."
            />
            <div className={classes.buttonsHolder}>
               <Button text="Start Flockfyshing" link="/signup" />
               <LinkUnderline to="/" text="Read the docs" />
            </div>
         </div>
         <img src={heroImage} alt="HeroImage" className={classes.image} />
      </section>
   );
}
