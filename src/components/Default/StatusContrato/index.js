import React from 'react';

import Bullet, { Font, Margin, Size, Tooltip } from "devextreme/viz/bullet";


const customizeTooltip = function(data) {
  return {
    text: `${parseInt(data.value)}%`
  };
};

export default function StatusContrato(cellData) {
  return (
    <>
        <Bullet
        showTarget={false}
        showZeroLevel={false}
        value={cellData.value}
        startScaleValue={0}
        endScaleValue={100}
        color="#f8b100"
        blur={10}
        borderRadius={20}
        >
        <Size width={150} height={12} />
        <Margin top={3} bottom={0} left={5} />
        <Tooltip
            enabled={true}
            paddingTopBottom={2}
            zIndex={5}
            customizeTooltip={customizeTooltip}
        >
            <Font size={18} />

        </Tooltip>
        </Bullet>
    </>
  );
}

export function Nome(Nome){
    return(
        <h3>{Nome.value}</h3>
    );
}