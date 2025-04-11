export const Dots9 = () => {
  return (
    <svg
      fill='currentColor'
      width='1em'
      height='1em'
      version='1.1'
      id='L4'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 40 60 16'
      enableBackground='new 0 0 0 0'
      xmlSpace='preserve'
    >
      <circle fill='currentColor' stroke='none' cx='6' cy='50' r='6'>
        <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.1' />
      </circle>
      <circle fill='currentColor' stroke='none' cx='26' cy='50' r='6'>
        <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.2' />
      </circle>
      <circle fill='currentColor' stroke='none' cx='46' cy='50' r='6'>
        <animate attributeName='opacity' dur='1s' values='0;1;0' repeatCount='indefinite' begin='0.3' />
      </circle>
    </svg>
  );
};
