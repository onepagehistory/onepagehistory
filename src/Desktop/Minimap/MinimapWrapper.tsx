import * as React from 'react';
import { Minimap } from './Minimap';

export const MinimapWrapper = (props: any) => {
  return (
    <Minimap
        highlightYear={ 1700 }
        highlightSpan={ 100 }
    />
  )
}