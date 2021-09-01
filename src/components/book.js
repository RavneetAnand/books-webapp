import './book.css';

const WEBSITE_URL =  'https://www.perlego.com';

const Book = ({bookDetail}) => {
  const {location, title, contributor, coverfile, uniqueUrl} = bookDetail;
  const imageUrl = `${WEBSITE_URL}/${location}/${coverfile}`;

  return (
    <div className='book'>
      <a target='blank' href={uniqueUrl}>
        <img src={imageUrl} alt='Book cover' width='120' height='165'/>
      </a>
      <div className='desc'>{title}</div>
      <div className='author'>{contributor}</div>
    </div>
  );
}

export default Book;