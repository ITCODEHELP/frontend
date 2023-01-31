import GradientLink from '../../../UI/gradientLink/gradientLink';

import classes from '../common.module.css';

export default function Overview(props: { dataset: Dataset }) {
  return (
    <div className={ classes.container }>
      <div className={ classes.contentContainer }>
        <h1>{ props.dataset.name } dataset</h1>

        <p>{ props.dataset.description }</p>

        <div className={ classes.infoCards }>
          <div>Images: { props.dataset.datasetImages.length }</div>

          <div>Size of Dataset: { props.dataset.size }Gb</div>

          <div>Date created: { props.dataset.dateCreated.toString() }</div>
        </div>

        <div className={ classes.btnContainer }>
          <GradientLink to="/dashboard" text="Return to Profile" hasArrow={ true } />
        </div>
      </div>
    </div>
  );
}
