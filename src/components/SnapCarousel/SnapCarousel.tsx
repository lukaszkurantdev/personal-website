import { type ReactNode } from "react";
import styles from "./SnapCarousel.module.css";
import { useSnapCarousel } from "react-snap-carousel";
import classNames from "classnames";
import ArrowLeft from "../../assets/icons/arrow-left-icon.svg";
import ArrowRight from "../../assets/icons/arrow-right-icon.svg";

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

type SnapCarouselProps<T> = {
  readonly items: T[];
  readonly renderItem: (props: CarouselRenderItemProps<T>) => ReactNode;
};

export const SnapCarousel = <T extends any>({
  items,
  renderItem,
}: SnapCarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.root}>
        <button
          className={classNames(
            styles.nextPrevButton,
            styles.prevButton,
            activePageIndex <= 0 && styles.nextPrevButtonDisabled
          )}
          //@ts-ignore
          onClick={prev}
        >
          <ArrowLeft />
        </button>

        <ul className={styles.scroll} ref={scrollRef}>
          {items.map((item, i) =>
            renderItem({
              item,
              isSnapPoint: snapPointIndexes.has(i),
            })
          )}
        </ul>

        <button
          className={classNames(
            styles.nextPrevButton,
            styles.nextButton,
            activePageIndex === pages.length - 1 &&
              styles.nextPrevButtonDisabled
          )}
          //@ts-ignore
          onClick={next}
        >
          <ArrowRight />
        </button>
        <div className={styles.controls} aria-hidden>
          {pages.map((_, i) => (
            <button
              key={i}
              className={classNames(
                styles.paginationButton,
                activePageIndex === i && styles.paginationButtonActive
              )}
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
