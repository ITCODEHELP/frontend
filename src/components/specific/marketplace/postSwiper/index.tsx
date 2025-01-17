import { useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import VerticalCard from '@/components/specific/marketplace/datasetCards/verticalCard';
import WideFocusedCard from '@/components/specific/marketplace/datasetCards/wideFocusedCard';

import useForceUpdate from '@/helpers/hooks/useForceUpdate';

import prev from '@/icons/main/arrow-left.svg';
import next from '@/icons/main/arrow-right.svg';

import 'swiper/swiper.min.css';
import classes from './styles.module.css';
import VerticalPostCard from '../datasetCards/verticalPostCard';

export default function PostSwiper(props: {
    posts: HomepagePost[];
    centeredSlides?: boolean;
    onSlideChange?: (selected: HomepagePost) => void;
}) {
    const previousRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        forceUpdate();
    }, [forceUpdate]);

    return (
        <div className={ classes.swiperContainer }>
            <div className={ `${classes.fadeOverlay}  ${classes.previous}` }>
                <button className={ `${classes.navButton}` } ref={ previousRef }>
                    <ReactSVG src={ prev.src } />
                </button>
            </div>

            <Swiper
                slidesPerView="auto"
                modules={ [Navigation] }
                navigation={ {
                    enabled: true,
                    prevEl: previousRef.current,
                    nextEl: nextRef.current,
                    disabledClass: classes.navDisabled,
                    lockClass: classes.navLocked,
                } }
                className={ classes.swiper }
                centeredSlides={ props.centeredSlides }
                onSlideChange={ (swiper) => {
                    props.onSlideChange?.(props.posts[swiper.realIndex]);
                } }
            >
                { props.posts.map((post) => {
                    return (
                        <SwiperSlide
                            className={ classes.slide }
                            key={ post._id }
                        >
                            <VerticalPostCard { ...post } />
                        </SwiperSlide>
                    );
                }) }

                <div className={ classes.swiperOverlay } />
            </Swiper>

            <div className={ `${classes.fadeOverlay} ${classes.next}` }>
                <button className={ `${classes.navButton}` } ref={ nextRef }>
                    <ReactSVG src={ next.src } />
                </button>
            </div>
        </div>
    );
}
