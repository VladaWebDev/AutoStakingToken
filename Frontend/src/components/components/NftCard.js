import React, { memo } from 'react';
import { numberWithCommas } from '../../utils';

//react functional component
const NftCard = ({ nft, className = 'd-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4', onBuyNow }) => {
  return (
    <div className={className}>
      <div className="nft__item m-0">
        <div className="nft__item_wrap">
          <video className="nft-video-item" poster="" autoPlay={true} loop={true} muted>
            <source id="video_source" src="./video/banner.m4v" type="video/mp4"></source>
          </video>
        </div>
        <div className="spacer-10"></div>
        <div className="d-flex flex-row justify-content-between">
          <span className="fs-18 f-space text-white">Dolphin NFT</span>
          <span className="fs-18 f-space color">${numberWithCommas(100)}</span>
        </div>
        <div className="spacer-10"></div>
        <div className='d-flex justify-content-between'>
          <span>Purchase on</span>
          <div className='text-white'>$100</div>
        </div>
        <div className='single-line'></div>
        <div className='d-flex justify-content-between'>
          <div>
            <span>Purchase on</span>
            <div className='text-white'>10 Feb 2022</div>
          </div>
          <div align="right">
            <span>Days</span>
            <div className='text-white'>15/530</div>
          </div>
        </div>
        <div className='single-line'></div>
        <div className='d-flex justify-content-between'>
          <div>
            <span>Current ROI</span>
            <div className='text-white'>1%</div>
          </div>
          <div align="right">
            <span>Total Revenue</span>
            <div className='text-white'>$100</div>
          </div>
        </div>
        <div className="spacer-10"></div>
        <div className="d-flex justify-content-between">
          <button className='btn-main m-auto' onClick={onBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default memo(NftCard);