import Link from "next/link";
import Button from '../components/button/button';

export const metadata = {
  title: '404 | Kunal Walavalkar',
  openGraph: {
    title: '404 | Kunal Walavalkar',
  },
}

const NotFound = () => {
  return (
    <main className="capital">
      <p className='four-o-four'>
        <span className="">4</span>
        <Button 
              button="" 
              buttonClassName="zero clickable pages glitch layers" 
              data-text="0"
              buttonHref="/" 
              ariaLabel="Go to my Projects page"
        />
        <span className="">4</span>
      </p>
    </main>
  );
}

export default NotFound;
