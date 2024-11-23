import { BsHouse } from "react-icons/bs"
import { FaChevronRight } from "react-icons/fa6"

export const PageHeading = () => {
  return (
    <div className="justify-between bg-[linear-gradient(to_right,#1e90ff,#124399)] fixed inset-x-0 top-[70px] z-50 text-white py-3 px-6 -mt-px md:pl-56 xl:pl-72 h-14">
      <div className="flex gap-3 items-center">
        <BsHouse className="w-6 h-6" />
        <span>Главная</span>
        <FaChevronRight />
        <span>Настройки профиля</span>
      </div>
    </div>
  )
}
