import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => (
    <div className="directory-container">
        {
            categories.map((category) => <DirectoryItem key={category.id} category={category} />)
        }
    </div>
);

export default Directory;
