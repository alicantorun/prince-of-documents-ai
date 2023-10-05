import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    // title="TailerTerm"
    description="TailorTerms revolutionizes contract creation for freelancers and professionals. Our AI-powered platform offers globally adaptable, precisely tailored contracts across all major categories. Experience the ease of crafting agreements that fit your terms, every time."
  >
    <VerticalFeatureRow
      title="Crafting Precision in Every Document"
      description="Streamlined AI-powered contract creation tailored for each client's unique needs.
      Globally adaptable agreements with localized jurisdiction options ensuring relevance and enforceability."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Empowering Clients Towards Financial Prosperity"
      description="TailorTerms equips businesses with the tools to minimize legal risks, resulting in cost savings.
      Boost revenue streams by ensuring every contractual detail is optimized for profitability."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Building Stronger, Long-Lasting Client Relationships"
      description="Comprehensive contract solutions that increase client trust and satisfaction.
      Continuous platform updates and support, ensuring our clients stay ahead in a dynamic business landscape."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
