import { useRef } from 'react';
import classes from './annotate.module.css';
import Label from '../../components/dashboard/annotate/label/label';
import Button from '../../components/UI/button/button';
import Wrapper from '../../components/dashboard/annotate/wrapper/wrapper';
import { url } from 'inspector';
export default function Annotate() {
	const rect = {
		x: 150,
    	y: 150,
    	width: 100,
    	height: 100
	};
    return (
        <div className={ classes.annotateContainer }>
			<h1>Picture- 1/50</h1>
			<div className={ classes.contentContainer }>
				<div className={ classes.leftContainer }>
					<div className={classes.wrapperDiv} style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzsi4JX8QgMg_J0-xUHxeJ9Ot_2zVfoh2Gw&usqp=CAU')"}}>
						<Wrapper rect={rect} imgWidth={635} imgHeight={423}/>
					</div>
					<div className={ classes.labelsContainer }>
						<Label text="Dog" />
						<Label text="Playing" />
						<Label text="Golden Spaniel" />

						<button className={ classes.addLabelButton }>+</button>
					</div>
				</div>

				<div className={ classes.rightContainer }>
					<div className={ classes.submitButtonContainer }>
						<Button to="/" text="Submit" gradientDirection="rightToLeft" />
					</div>

					<div className={ classes.box }>
					</div>

					<div className={ classes.switchImageContainer }>
						<button className={ classes.switchImageButton }> 
							<svg
								className={ classes.svg + ' ' + classes.leftSvg }
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								/>
							</svg>
						</button>
		
						<button className={ classes.switchImageButton }
						> 
							<svg
								className={ classes.svg }
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>	
        </div>
    );
}
  