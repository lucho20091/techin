 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo'; 
import ServiceArea from './ServiceArea';
import TestimonialHomeThree from '../homes/home-3/TestimonialHomeThree';
import PricingHoneOne from '../homes/home-1/PricingHoneOne';
import WorProcessHomeOne from '../homes/home-1/WorProcessHomeOne';
import FaqHomeTwo from '../homes/home-2/FaqHomeTwo';
import BlogHomeOne from '../homes/home-1/BlogHomeOne';
import Wrapper from '../../layouts/Wrapper';
import HeaderThree from '../../layouts/headers/HeaderThree';
import Breadcrumb from '../../common/Breadcrumb';
import FooterTwo from '../../layouts/footers/FooterTwo';

const Service = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Services" subtitle="Services" />
      <ServiceArea />
      <TestimonialHomeThree />
      <PricingHoneOne />
      <WorProcessHomeOne />
      <FaqHomeTwo />
      <BlogHomeOne style_3={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Service;