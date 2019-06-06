export const CURRENT_YEAR = (new Date()).getFullYear() 
export const YEAR_LENGTH = 10;

export const DEFAULT_IMAGE_SIZE = 80;
export const DEFAULT_DESCRIPTION_WIDTH = 250;
export const DEFAULT_DESCRIPTION_MARGIN = 7;
export const DEFAULT_STEP_HEIGHT = 16;
export const DEFAULT_CARD_WIDTH = DEFAULT_IMAGE_SIZE + DEFAULT_DESCRIPTION_WIDTH + DEFAULT_DESCRIPTION_MARGIN;

const createSizes =
    ({
        imageSize = DEFAULT_IMAGE_SIZE
        , descriptionWidth = DEFAULT_DESCRIPTION_WIDTH
        , descriptionMargin = DEFAULT_DESCRIPTION_MARGIN
        , stepHeight = DEFAULT_STEP_HEIGHT
    }) => 
        ({
            imageSize
            , descriptionWidth
            , descriptionMargin
            , cardWidth: imageSize + descriptionWidth + descriptionMargin
            , cardHeight: imageSize
            , stepHeight
        });


const S_SIZES = createSizes({ imageSize: 60, stepHeight: 10, descriptionWidth: 350 });
const M_SIZES = createSizes({ });
const L_SIZES = createSizes({ imageSize: 120 });

export const SIZES = {
    s: S_SIZES,
    m: M_SIZES,
    l: L_SIZES,
};
