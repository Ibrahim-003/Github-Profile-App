interface ProfileHeader {
  followers: number;
  following: number;
  location: string | null;
}

const ProfileHeader: React.FC<ProfileHeader> = ({
  followers,
  following,
  location,
}) => {
  return (
    <header className='mt-6 mb-5 lg:mb-12 py-3 flex flex-col sm:flex-row sm:flex-wrap md:justify-center lg:justify-end xl:justify-center gap-5'>
      <div className='bg-midnight-blue rounded-xl px-5 py-2 w-fit flex items-center gap-5'>
        <span className='text-cloud-gray'>Followers</span>
        <div className='w-[1px] h-9 bg-charcoal-blue'></div>
        <span className='text-cloud-gray'>{followers}</span>
      </div>
      <div className='bg-midnight-blue rounded-xl px-5 py-2 w-fit flex items-center gap-5'>
        <span className='text-cloud-gray'>Following</span>
        <div className='w-[1px] h-9 bg-charcoal-blue'></div>
        <span className='text-cloud-gray'>{following}</span>
      </div>
      {location && (
        <div className='bg-midnight-blue rounded-xl px-5 py-2 w-fit flex items-center gap-5'>
          <span className='text-cloud-gray'>Location</span>
          <div className='w-[1px] h-9 bg-charcoal-blue'></div>
          <span className='text-cloud-gray'>{location}</span>
        </div>
      )}
    </header>
  );
};

export default ProfileHeader;
