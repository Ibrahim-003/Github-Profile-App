interface UserCardProps {
    login: string;
    avatarUrl: string;
    onClick: (login: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({login, avatarUrl, onClick}) => {
    return (
        <div className="bg-midnight-blue w-full max-w-[484px] mx-auto cursor-pointer rounded flex items-center gap-3 p-2" onClick={() => onClick(login)}>
            <div>
                <img src={avatarUrl} alt={login} className="w-10 h-10 rounded" />
            </div>
            <div>
                <h2>{login}</h2>
            </div>
        </div>
    )
}

export default UserCard;