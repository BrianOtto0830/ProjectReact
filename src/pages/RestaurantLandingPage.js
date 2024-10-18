import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import ProductGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-gray-500 text-gray-200 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-200 text-[#008080] px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl w-[450px] h-[500px]`;

  //ganti warna login button "PrimaryLink pada light.js"
  //PrimaryButton untuk mengubah warna tombol OrderNow pada hero section, ada di TwoColumnWithVideo.js
  //ganti warna tombol buy now di CardButton pada TabCardGrid.js pada Primary ButtonBase
  //TabControl pada props.active untuk mengubah warna tab pada grid product ada di TabCardGrid.js
  //ganti tombol See Review ada di TwoColWithButton.js pada "PrimaryButton"
  //ganti tombol buynow pada modul yang muncul saat kita klik buynow pada item di TabCardGrid.js
  // logo img pada FiveColumnWithInputForm.js untuk mengganti logo pada kiri bawah di landingpage
  //TwoColSingleFeatureWithStats2.js untuk mengganti section MainFeature2
  //link pada ThreeColSimple.js untuk mengubah warna dari link "Lear more" pada features
  //tambah kode pada getProductById untuk get by id
  // edit logo di LogoImg pada FiveColumnWithInputForm.js

  // TODO
  // 1. Panggil component yang harusnya ada di halaman ini
  // 2. Modifikasi styling dan value property yang dimiliki component

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            High-Quality Fashion{" "}
            <HighlightedText>Trendy Styles</HighlightedText>
          </>
        }
        description="At Trend Era, we offer high-quality fashion that stands the test of time. Discover trendy styles to elevate your wardrobe today!"
        imageSrc="https://woman-delice.com/wp-content/uploads/2017/01/pokupki-na-rasprodazhah2.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="See Our Story"
      />
      
      <ProductGrid/>

      <MainFeature/>

      <Features/>

      <MainFeature2/>

      <Testimonial/>

      <DownloadApp
        text={
          <>
            Customers around the world are enhancing their wardrobes with{" "}
            <HighlightedTextInverse>Trend Era.</HighlightedTextInverse>
            <br/>
            Shop the latest fashion trends today!
          </>
        }
      />
      
      <Footer background={"bg-gray-200"} />
    </AnimationRevealPage>
  );
};
