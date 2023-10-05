import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Experience TailorTerms Today!"
      subtitle="Crafting your perfect contract has never been easier or more precise."
      button={
        <Link href="">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
