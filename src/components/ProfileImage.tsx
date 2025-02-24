interface ProfileImageProps {
    avatarUrl: string;
    login: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({avatarUrl, login}) => {
    return (
      <div className='w-[120px] h-[120px] lg:absolute lg:-top-5 lg:left-0 bg-steel-blue rounded-2xl p-2'>
        <img src={avatarUrl} alt={login} className='rounded-2xl' />
      </div>
    );
}

export default ProfileImage;
