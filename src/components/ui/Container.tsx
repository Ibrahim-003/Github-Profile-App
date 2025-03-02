interface ContainerProps {
    children: React.ReactNode;
    styles: string;
}

const Container: React.FC<ContainerProps> = ({children, styles}) => {
    return (
        <div className={styles}>
            {children}
        </div>
    )
}

export default Container;
