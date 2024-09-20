'use client'


import { useRouter } from 'next/navigation'
import '../../app/globals.css'


export default function page() {
    const router = useRouter();

   
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div>
        <nav>
<div>
<p>Shop</p>
</div>
<div className="menu_list">
<li onClick={() => navigateTo('/')}>Home</li>
            <li onClick={() => navigateTo('/About')}>About</li>
            <li onClick={() => navigateTo('/Blog')}>Blog</li>
            <li onClick={() => navigateTo('/Pricing')}>Pricing</li>
  <button className="signup"> Signup</button>

</div>
</nav>
    </div>
  )
}




