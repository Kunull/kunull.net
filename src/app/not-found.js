import Link from "next/link";
import Button from '../components/button/button';

const NotFound = () => {
  return (
    <main className="capital">
      <p className='four-o-four'>
        <span className="">4</span>
        <Button 
              button="" 
              buttonClassName="zero clickable pages" 
              buttonHref="/" 
              ariaLabel="Go to my Projects page"
        />
        <span className="">4</span>
      </p>
    </main>
  );
}

export default NotFound;
