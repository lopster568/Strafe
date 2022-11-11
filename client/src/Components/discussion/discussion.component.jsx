import cardImg from '../../images/card1.webp'
import Button from '../button/button.component';
import AuthorHeader from '../authorHeader/author-header.component';

const Discussion = () => {
    return (
        <div className="bg-white shadow-inner border-l border-bg shadow-lg rounded mb-2" >
            <div className="p-8 space-x-14" >
                <AuthorHeader />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum augue sem, sit amet scelerisque sapien accumsan mollis. Phasellus nec velit fringilla, mattis elit in, molestie ipsum. Nunc eget vehicula purus. Aliquam erat volutpat. Pellentesque mi elit, dapibus in euismod sit amet, finibus eget justo. Integer gravida sapien quis diam sodales, quis mollis arcu malesuada. Phasellus ac nisl sollicitudin, laoreet neque eget, molestie ligula.</p>
                <svg className='my-2' xmlns="http://www.w3.org/2000/svg" width="1" height="20" viewBox="0 0 1 20">
                    <line id="Line_1" data-name="Line 1" y2="20" transform="translate(0.5)" fill="none" stroke="#ff724c" strokeWidth="1" />
                </svg>
                <AuthorHeader />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum augue sem, sit amet scelerisque sapien accumsan mollis. Phasellus nec velit fringilla, mattis elit in, molestie ipsum. Nunc eget vehicula purus. Aliquam erat volutpat. </p>
            </div>
        </div>
    );
}

export default Discussion;              