interface ProfileFooterProps {
    repoUrl: string;
}

const ProfileFooter: React.FC<ProfileFooterProps> = ({repoUrl}) => {
    return (
      <footer className='flex justify-center items-center mt-8 md:mt-12 xl:mt-15'>
        <a
          href={`${repoUrl}?tab=repositories`}
          target='_blank'
          className='text-center font-medium text-cloud-gray hover:text-slate-gray hover:underline decoration-slate-gray decoration-2 underline-offset-4 transition-all duration-200 ease-in'
        >
          View all repositories
        </a>
      </footer>
    );
}
export default ProfileFooter;
