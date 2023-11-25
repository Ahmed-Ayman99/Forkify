import { BsArrowRight } from 'react-icons/bs';

import Button from './Button';
import Heading2 from './Heading';

const Direction = ({ publisher }) => {
  return (
    <div className="flex flex-col items-center py-[50px] px-20">
      <Heading2>HOW TO COOK IT</Heading2>

      <p className="text-center text-graydark2 mb-9">
        This recipe was carefully designed and tested by
        <strong> {publisher}</strong> . Please check out directions at their
        website.
      </p>

      <Button>
        directions <BsArrowRight className="h-[23.5px] w-[23.5px]" />
      </Button>
    </div>
  );
};

export default Direction;
