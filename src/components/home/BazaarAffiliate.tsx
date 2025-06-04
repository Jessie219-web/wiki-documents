import React from 'react';
import clsx from 'clsx';
import css from './form.module.scss';

const getAffiliateImage = (): string => {
  return require('../../../assets/index/bazaar_affiliate_banner.jpg').default;
};

const BazaarAffiliate: React.FC = () => {
  return (
    <div className={clsx(css.bazaar_affiliate_container, 'com_module')}>
      {/* 标题独占一行 */}
      <div className={css.bazaar_affiliate_title}>
        Join Creators & Affiliate Program
      </div>

      {/* 下方内容两列布局 */}
      <div className={css.bazaar_affiliate_row}>
        {/* 左侧文字内容 */}
        <div className={css.bazaar_affiliate_content}>
          <h3>Seeed is looking for tech creators & community promoters!</h3>
          <p>
            Join and unlock 10% commission Home Assistant compatible hardware campaign. Developer favourites are packed with project potential. Don&apos;t hesitate, start promoting and earning high rewards.
          </p>

          <div className={css.bazaar_affiliate_contact}>
            Got questions? Email us to know more:{' '}
            <a href="mailto:affiliate@seeed.cc">affiliate@seeed.cc</a>
          </div>

          <div className={css.bazaar_affiliate_buttons}>
            <a
              href="https://www.seeedstudio.com/blog/affiliate-program/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.btn_primary}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* 右侧图片 */}
        <a
          href="https://www.seeedstudio.com/blog/affiliate-program/"
          target="_blank"
          rel="noopener noreferrer"
          className={css.bazaar_affiliate_image_wrapper}
        >
          <img
            src={getAffiliateImage()}
            alt="Bazaar Affiliate Banner"
            className={css.bazaar_affiliate_image}
            width={1600}
            height={1600}
          />
        </a>
      </div>
    </div>
  );
};

export default BazaarAffiliate;
