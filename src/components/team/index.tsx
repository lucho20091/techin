 
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo'; 
import BlogHomeOne from '../homes/home-1/BlogHomeOne';
import TeamArea from './TeamArea';
import Wrapper from '../../layouts/Wrapper';
import HeaderThree from '../../layouts/headers/HeaderThree';
import Breadcrumb from '../../common/Breadcrumb';
import FooterTwo from '../../layouts/footers/FooterTwo';

const Team = () => {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title="Team Members" subtitle="Team Members" />
      <TeamArea />
      <BlogHomeOne style_2={true} />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default Team;