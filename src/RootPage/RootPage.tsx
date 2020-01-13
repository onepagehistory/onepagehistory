import React, { useLayoutEffect, useState } from 'react';
import { DesktopPageComponent } from '../Desktop/DesktopPageComponent';
import { MobilePageComponent } from '../Mobile/MobilePageComponent';

export const RootPage = () => {
    const [isDesktop, setDesktop] = useState(true);

    useLayoutEffect(()=>{
        if (window.innerWidth <= 420) { // POOR MAN'S MOBILE CHECK
            setDesktop(false);
        }
    })

    return isDesktop ? <DesktopPageComponent /> : <MobilePageComponent />
}

export default RootPage;
