import { ReactSVG } from 'react-svg';

import DatasetTypeCard from '../../datasetTypeCard';

import { formatFileSize } from '@/helpers/formatting';
import { dayjs } from '@/helpers/date';

import clock from '@/icons/main/clock.svg';

import classes from './style.module.css';

type VerticalCardProps = {
    coverImg: string;
    name: string;
    owner: string; // TODO: change to user obj and dataset obj
    numItems: number;
    updatedAt: Date;
    size: number;
    type: string;
    isPaid?: boolean;
    price?: number;
    key?: string;
}

export default function VerticalCard(props: VerticalCardProps) {
    return (
        <div className={ classes.container }>
            <div className={ classes.contentContainer }>
                <div className={ classes.header }>
                    <DatasetTypeCard type={ props.type } className={ classes.typeCard } />

                    <img src={ props.coverImg } alt="cover" />

                    <div className={ classes.timeContainer }>
                        <ReactSVG src={ clock.src } className={ classes.clockIcon } />

                        <p>{ dayjs(props.updatedAt).fromNow() }</p>
                    </div>
                </div>

                <div className={ classes.middleSection }>
                    <h1>{ props.name }</h1>
                    <p>@{ props.owner }</p>
                </div>

                {
                    props.isPaid && (
                        <div className={ classes.priceContainer }>
                            <p>${ props.price?.toFixed(2) }</p>
                        </div>
                    )
                }

                <div className={ classes.footer }>
                    <div className={ classes.footerCardContainer + (props.isPaid ? ' ' + classes.paidShrink : '') }>
                        <h1>{ props.numItems }</h1>
                        <p>Items</p>
                    </div>

                    <div className={ classes.footerCardContainer + (props.isPaid ? ' ' + classes.paidShrink : '') }>
                        <h1>{ formatFileSize(props.size) }</h1>
                        <p className={ classes.size }>Size</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
