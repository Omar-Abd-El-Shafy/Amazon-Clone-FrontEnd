import '../../../src/index.css' 
import React from 'react';

const TopHandler = () =>
{
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth',
});
}
const BackTop = () => {
  return (
        <div className=" text-white text-center p-3 backTop" onClick={TopHandler}>Back to Top</div>
      )
};

export default BackTop;
