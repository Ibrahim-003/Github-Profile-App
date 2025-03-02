import License from "../../assets/images/license.svg?react";
import Fork from "../../assets/images/fork.svg?react";
import Star from "../../assets/images/star.svg?react";
import Container from "../ui/Container";
import { RepositoryCardProps } from "../../types/types";
import { calculateDaysFromNow } from "../../utils/utils";

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  repoData,
  onClick,
}) => {
  const { name, description, license, forks, stars, updateDate } = repoData;

  const daysFromNow = calculateDaysFromNow(updateDate);
  return (
    <article
      onClick={onClick}
      className='cursor-pointer bg-linear-to-r from-midnight-blue from-5% to-indigo-night to-90% rounded-xl p-5'
    >
      <h4 className='text-xl font-medium'>{name}</h4>
      {description && <p className='mt-3'>{description}</p>}
      <div className='flex flex-wrap items-center gap-3 mt-5'>
        {license && (
          <>
            <Container styles={`flex items-center gap-1`}>
              <License width='24' height='24' /> <span>{license}</span>
            </Container>
          </>
        )}
        <Container styles={`flex items-center gap-1`}>
          <Fork />
          <span>{forks}</span>
        </Container>
        <Container styles={`flex items-center gap-1`}>
          <Star />
          <span>{stars}</span>
        </Container>
        <span className='text-xs'>updated {daysFromNow} days ago</span>
      </div>
    </article>
  );
};

export default RepositoryCard;
