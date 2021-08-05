import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon
 } from "@heroicons/react/outline";

function Header () {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} link={"/"}/>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} link={"/trending"}/>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} link={"/verified"}/>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} link={"/collections"}/>
        <HeaderItem title="SEARCH" Icon={SearchIcon} link={"/search"}/>
        <HeaderItem title="ACCOUNT" Icon={UserIcon} link={"/accounts"}/>
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6" width={200} height={100}
      />

    </header>
  )
}

export default Header