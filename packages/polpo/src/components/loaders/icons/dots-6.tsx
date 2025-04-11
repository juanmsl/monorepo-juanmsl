export const Dots6 = () => {
  return (
    <svg viewBox='0 0 240 240' fill='currentColor' width='1em' height='1em'>
      <style>
        {
          '@keyframes ringA{0%,4%{stroke-dasharray:0 660;stroke-width:20;stroke-dashoffset:-330}12%{stroke-dasharray:60 600;stroke-width:30;stroke-dashoffset:-335}32%{stroke-dasharray:60 600;stroke-width:30;stroke-dashoffset:-595}40%,54%{stroke-dasharray:0 660;stroke-width:20;stroke-dashoffset:-660}62%{stroke-dasharray:60 600;stroke-width:30;stroke-dashoffset:-665}82%{stroke-dasharray:60 600;stroke-width:30;stroke-dashoffset:-925}90%,to{stroke-dasharray:0 660;stroke-width:20;stroke-dashoffset:-990}}@keyframes ringB{0%,12%{stroke-dasharray:0 220;stroke-width:20;stroke-dashoffset:-110}20%{stroke-dasharray:20 200;stroke-width:30;stroke-dashoffset:-115}40%{stroke-dasharray:20 200;stroke-width:30;stroke-dashoffset:-195}48%,62%{stroke-dasharray:0 220;stroke-width:20;stroke-dashoffset:-220}70%{stroke-dasharray:20 200;stroke-width:30;stroke-dashoffset:-225}90%{stroke-dasharray:20 200;stroke-width:30;stroke-dashoffset:-305}98%,to{stroke-dasharray:0 220;stroke-width:20;stroke-dashoffset:-330}}@keyframes ringC{0%{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:0}8%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-5}28%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-175}36%,58%{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:-220}66%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-225}86%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-395}94%,to{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:-440}}@keyframes ringD{0%,8%{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:0}16%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-5}36%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-175}44%,50%{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:-220}58%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-225}78%{stroke-dasharray:40 400;stroke-width:30;stroke-dashoffset:-395}86%,to{stroke-dasharray:0 440;stroke-width:20;stroke-dashoffset:-440}}.pl1123__ring{animation:ringA 2s linear infinite}'
        }
      </style>
      <circle
        cx={120}
        cy={120}
        r={105}
        fill='none'
        stroke='#000'
        strokeDasharray='0 660'
        strokeDashoffset={-330}
        strokeLinecap='round'
        strokeWidth={20}
        className='pl1123__ring'
        style={{
          stroke: 'currentColor',
        }}
      />
      <circle
        cx={120}
        cy={120}
        r={35}
        fill='none'
        stroke='#000'
        strokeDasharray='0 220'
        strokeDashoffset={-110}
        strokeLinecap='round'
        strokeWidth={20}
        className='pl1123__ring'
        style={{
          animationName: 'ringB',
          stroke: 'currentColor',
        }}
      />
      <circle
        cx={85}
        cy={120}
        r={70}
        fill='none'
        stroke='#000'
        strokeDasharray='0 440'
        strokeLinecap='round'
        strokeWidth={20}
        className='pl1123__ring'
        style={{
          animationName: 'ringC',
          stroke: 'currentColor',
        }}
      />
      <circle
        cx={155}
        cy={120}
        r={70}
        fill='none'
        stroke='#000'
        strokeDasharray='0 440'
        strokeLinecap='round'
        strokeWidth={20}
        className='pl1123__ring'
        style={{
          animationName: 'ringD',
          stroke: 'currentColor',
        }}
      />
    </svg>
  );
};
