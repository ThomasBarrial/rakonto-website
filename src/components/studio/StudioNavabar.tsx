/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';

function StudioNavabar(props: any) {
  return (
    <div>
      <div>
        <div className="flex h-[50px] w-full bg-black items-center justify-between p-5 ">
          <Link href="/" className="text-[#b021fd] flex items-center">
            Go to the website
          </Link>
        </div>
        {props.renderDefault(props)}
      </div>
    </div>
  );
}

export default StudioNavabar;
