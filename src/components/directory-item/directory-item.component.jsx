import './directory-item.styles.jsx';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;